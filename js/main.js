

console.warn(
  "%cNote!",
  "color: aqua; font-weight: 600; background: yellow; padding: 0 5px; border-radius: 5px",
  "https://discord.gg/wPaNa7kY36 ATLHOSTING DISCORD"
);

function script(text) {
  console.log("%cScript Injection", "color: cyan; font-weight: 600; background: black; padding: 0 5px; border-radius: 5px", text);
}

// ====================================
// SCRIPT INJECTION
// ====================================

var gaenabled = window.localStorage.getItem("ga");
if (gaenabled == "false") {
  script("Skipped GA injection because it is disabled by the user.");
} else {
  const gascript = document.createElement("script");
  gascript.setAttribute("async", "");
  document.head.append(gascript, inlinegascript);
  script("Injected script 1/3");
}

const tabCloak = document.createElement("script");
tabCloak.setAttribute("src", "/js/tab_cloak.js");
document.head.append(tabCloak);
script("Injected script 2/3");

const notify = document.createElement("script");
notify.setAttribute("src", "/js/notify.js");
document.head.append(notify);
script("Injected script 3/3");

const adblock = document.createElement("script");
adblock.setAttribute("async", "");
document.head.append(adblock);
script("Injected script 4/4");
