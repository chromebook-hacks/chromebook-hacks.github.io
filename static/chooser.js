const otherArchBoards = ["asurada", "bob", "cherry", "daisy", "daisy-skate", "daisy-spring", "elm", "hana", "jacuzzi", "kevin", "kukui", "nyan-big", "nyan-blaze", "nyan-kitty", "peach-pi", "peach-pit", "scarlet", "strongbad", "trogdor", "veyron-fievel", "veyron-jaq", "veyron-jerry", "veyron-mickey", "veyron-mighty", "veyron-minnie", "veyron-speedy", "veyron-tiger", "x86-alex-he", "x86-mario", "x86-zgb-he"];
const shimBoards = ["ambassador", "banon", "brask", "brya", "clapper", "coral", "consola", "cyan", "dedede", "enguarde", "edgar", "elm", "endguarde", "fizz", "glimmer", "grunt", "hana", "hatch", "jacuzzi", "kalista", "kukui", "kefka", "lulu", "nami", "nissa", "octopus", "orco", "puff", "pyro", "reef", "reks", "relm", "sand", "sentry", "snappy", "stout", "strongbad", "tidus", "trogdor", "ultima", "volteer", "zork"];
const rangeComp = (a, b, c) => {
  return b <= a && a <= c;
}
const prettyNames = { "80": "v80 (v75-83)" };

let canRootBoard = (supplied_board) => {
  let BOARD = chrome100.find(board => board.target == supplied_board);
  if (!BOARD) {
    alert("Invalid board!");
    return;
  }
  let hasLegacyCrosh = document.getElementById("hasLegacyCrosh").checked,
    hasCrosh = document.getElementById("hasCrosh").checked,
    hasCroshBlock99 = document.getElementById("hasCroshBlock99").checked,
    hasDriveFS = document.getElementById("hasDriveFS").checked,
    hasARC = document.getElementById("hasARC").checked,
    hasKiosk = document.getElementById("hasKiosk").checked && BOARD.images.find(image => parseInt(image.params.chrome.split(".")[0]) <= 81);
  let downgradable = {
    "80": !!BOARD.images.find(image => rangeComp(parseInt(image.params.chrome.split(".")[0]), 75, 83)),
    "87": !!BOARD.images.find(image => image.params.chrome.split(".")[0] == "87"),
    "91": !!BOARD.images.find(image => (image.params.chrome.split(".")[0] == "91" && parseInt(image.params.platform.split(".")[1]) <= 64)),
    "101": !!BOARD.images.find(image => image.params.chrome.split(".")[0] == "101")
  }
  let pwnable = Object.assign({ "SH1mmer": shimBoards.includes(supplied_board) }, downgradable);

  if (otherArchBoards.includes(supplied_board)) {
    // maybe these will work in the future?
    pwnable["87"] = false;
    pwnable["91"] = false;
    pwnable["101"] = false;
  }
  if (!hasDriveFS) {
    // same for these
    pwnable["91"] = false;
    pwnable["101"] = false;
  }
  if (!hasARC) {
    pwnable["87"] = false;
  }
  if (!hasLegacyCrosh && !hasKiosk) {
    pwnable["80"] = false;
  }
  if (!hasCrosh && !hasCroshBlock99) {
    pwnable["87"] = false;
    pwnable["91"] = false;
  }
  if (!hasCrosh || hasCroshBlock99) {
    pwnable["101"] = false;
  }
  let canRoot = false;
  var waysToRoot = [];
  Object.keys(pwnable).forEach(pwn => {
    if (pwnable[pwn]) {
      canRoot = true;
      waysToRoot.push(pwn);
    }
  })
  return waysToRoot;
}

function redirect() {
  var waysToRoot = canRootBoard(document.getElementById("board").value);
  console.log(waysToRoot);
  if (waysToRoot.includes("SH1mmer") && document.getElementById("curVersion").value >= 111) {
    window.parent.location.href = "docs/exploits/badrecovery";
  } else if (document.getElementById("curVersion").value >= 112) {
    window.parent.location.href = "docs/exploits/badrecovery"
  }
  /* if (document.getElementById("curVersion").value >= 125) {
    alert("Wait for ICARUS.")
  } else if (waysToRoot.includes("SH1mmer") && document.getElementById("curVersion").value >= 125) {
    alert("No docs/exploits are availiable for your version yet.");
  } */
  if (waysToRoot.includes("80")) {
    window.parent.location.href = "docs/exploits/v81";
  } else if (waysToRoot.includes("SH1mmer")) {
    // v81 provides more options then sh1mmer, sh1mmer is more of a second-best option here
    window.parent.location.href = "docs/exploits/sh1mmer"
  } else if (waysToRoot.includes("87")) {
    window.parent.location.href = "docs/exploits/v87";
  } else if (waysToRoot.includes("91")) {
    window.parent.location.href = "docs/exploits/v91";
  } else if (waysToRoot.includes("101")) {
    window.parent.location.href = "docs/exploits/v101";
  } else {
    alert("No docs/exploits are available for your platform :(");
  }
}

document.querySelector("form").addEventListener('submit', function(e) {
  e.preventDefault();
});
