// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string


function renderLicenseBadge(license) {
  const splitLicense = license.split(" ").join("");
  if (license != null) {
    return `[![GitHub license](https://img.shields.io/badge/license-${splitLicense}-blue.svg)]\n\n`
  } else {
    return "";
  };
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

  if (license === "Mozzilla Public Licensing 2.0") {
    return "https://www.mozilla.org/en-US/MPL/2.0/";
  } else if (license === "MIT License") {
    return "https://github.com/git/git-scm.com/blob/master/MIT-LICENSE.txt";
  } else if (license === "GNU LGPLv3") {
    return "https://www.gnu.org/licenses/lgpl-3.0.en.html";
  } else if (license === "Apache 2.0") {
    return "https://www.apache.org/licenses/LICENSE-2.0"
  } else {
    return "No license";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

  if (license === null) {
    return ""
  } else {
    return "## License\n"
  }
}

module.exports = {
  renderLicenseBadge,
  renderLicenseSection,
  renderLicenseLink
};