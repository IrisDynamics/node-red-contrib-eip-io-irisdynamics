function updateBit(number, bitPosition, bitValue) {
    const bitValueNormalized = bitValue ? 1 : 0;
    const clearMask = ~(1 << bitPosition);
    return (number & clearMask) | (bitValueNormalized << bitPosition);
}

module.exports = function(RED) {

    function OutNode(n) {
        RED.nodes.createNode(this, n)
         
        this.conn = RED.nodes.getNode(n.conn).conn;
        let node = this;
        let statusInterval = null

        this.on('input', function(msg, send, done) {
            send = send || function () { node.send.apply(node, arguments) };
            let outValue = msg.payload;
            try {
                switch (msg.topic) {
                    case 'Triton Control':
                        byteOffset = 0;
                        node.conn.outputData.writeInt32LE(parseInt(outValue), byteOffset)
                        break;
                    case 'Axis Control':
                        byteOffset = 4;
                        node.conn.outputData.writeInt32LE(parseInt(outValue), byteOffset)
                        break;
                    case 'Motor 1 Position':
                        byteOffset = 8;
                        node.conn.outputData.writeInt32LE(parseInt(outValue), byteOffset)
                        break;
                    case 'Motor 2 Position':
                        byteOffset = 12;
                        node.conn.outputData.writeInt32LE(parseInt(outValue), byteOffset)
                        break;
                    case 'Motor 3 Position':
                        byteOffset = 16;
                        node.conn.outputData.writeInt32LE(parseInt(outValue), byteOffset)
                        break;
                    case 'Motor 4 Position':
                        byteOffset = 20;
                        node.conn.outputData.writeInt32LE(parseInt(outValue), byteOffset)
                        break;
                }
                msg.payload = true;
            } catch (e){
                msg.payload = e
            }
            send(msg)
            if (done) {
                done();
            }
        });

        statusInterval = setInterval(() => {
            if (node.conn.connected) {
                node.status({fill:"green",shape:"dot",text:"connected"});
            } else {
                node.status({fill:"red",shape:"ring",text:"disconnected"});
            }
        }, 500)
        
        this.on('close', () => {
            clearInterval(statusInterval)
        })
    };

    
   
    RED.nodes.registerType("Iris eip-io out", OutNode);

};