const BASE_URL = process.env.NEXT_PUBLIC_SITE_BASE_URL;
export async function generateMetadata() {
  const title = "BBQ Grill Outlet | Premium Grills & Outdoor Living";
  const description =
    "Elevate your backyard with BBQ Grill Outlet! Discover top-quality grills, outdoor kitchens, and accessories designed to bring flavor and style to every gathering. Shop now and create your perfect outdoor space!";
  try {
    const res = await fetch(`${BASE_URL}/api/favicon`); // Fetch from API
    const data = await res.json();
    const faviconUrl = data; // Use default if API fails

    return {
      title: title,
      description: description,
      icons: {
        icon: faviconUrl,
      },
      other: {
        "google-site-verification": "h2rOGIJQRMPLIaE7T0hRzFUK313zZjb-QoztYvHW90Q",
      },
    };
  } catch (error) {
    console.error("Failed to fetch favicon, using default:", error);
    return {
      title: title,
      description: description,
      icons: {
        icon: "/logo-s1.webp", // Default favicon from public/
      },
    };
  }
}
