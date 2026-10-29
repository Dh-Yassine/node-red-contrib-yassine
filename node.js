module.exports = function(RED) {
    function YassineNode(config) {
        RED.nodes.createNode(this, config);
        var node = this;
        node.on('input', function(msg) {
            msg.payload = "Yassine";
            node.send(msg);
        });
    }
    RED.nodes.registerType("yassine", YassineNode);
};
