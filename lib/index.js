/*
 *   A babel plugin for the pillbug framework.
 */

oldArgs = '__args__'
newArgs = 'app, box, build, el, h, obj, seq, watch'


function replace(entry) {
  if (entry.name === oldArgs) {
    entry.name = newArgs
  }
}


function processItems(items) {
  items.forEach(entry => replace(entry))
}


module.exports = () => {
  return {
    visitor: {
      CallExpression(path) {
        processItems(path.node.arguments)
      },
      Function(path) {
        processItems(path.node.params)
      }
    }
  };
};