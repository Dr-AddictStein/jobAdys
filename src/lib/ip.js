export async function getClientIpAndLocation(req) {
  try {
    const forwarded = req.headers.get("x-forwarded-for");
    const ipFromHeader = forwarded ? forwarded.split(",")[0].trim() : null;

    let ip = ipFromHeader;

    if (!ip || ip === "127.0.0.1" || ip === "::1") {
      const ipRes = await fetch("https://ipapi.co/json/");
      const ipData = await ipRes.json();
      ip = ipData.ip;
    }

    const geoRes = await fetch(`https://ipapi.co/${ip}/json/`);
    const geoData = await geoRes.json();

    return {
      ip: ip || "Unknown",
      location: `${geoData.country_name || "Unknown"}, ${geoData.city || "Unknown"}`
    };
  } catch (error) {
    console.error("GeoIP fetch error:", error);
    return {
      ip: "Unknown",
      location: "Unknown"
    };
  }
}
