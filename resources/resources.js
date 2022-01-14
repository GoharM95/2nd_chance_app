// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

const resourceListLinks = [
  "https://www.galvanize.com",
  "https://www.aca.am https://replit.com",
  "https://leetcode.com/problemset/all/",
  "https://eloquentjavascript.net",
  "https://www.udemy.com/",
  "https://frontendmasters.com/",
];

//   console.log("resource", resource);
//   console.log("resourceLink", resourceLink);
function getResourceLinks() {
  const resourceList = document.createElement("ul");

  const body = document.querySelector("body");

  for (let link of resourceListLinks) {
    const resource = document.createElement("li");
    const resourceLink = document.createElement("a");
    resourceLink.append(link);
    resource.append(resourceLink);
    resourceList.append(resource);
    body.append(resourceList);
  }
}

console.log(getResourceLinks(resourceListLinks));

array.forEach(function (item) {
  var li = document.createElement("li");
  var text = document.createTextNode(item);
  li.appendChild(text);
  document.getElementById("myUl").appendChild(li);
});
