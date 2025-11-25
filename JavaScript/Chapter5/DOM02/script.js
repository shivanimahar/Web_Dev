console.log("Hello World")

document.body.firstElementChild
document.body.firstElementChild.childNodes
document.body.firstElementChild.children
document.body.firstElementChild.children[1]
document.body.firstElementChild.children[0]
document.body.firstElementChild.children[0].nextElementSibling
document.body.firstElementChild.children[0].previousElementSibling //will get everything
document.body.firstElementChild.children[0].previousSibling //will only give text node (khali space+new lines)
