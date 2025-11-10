module.exports = function(RED) {

    function InNode(n) {
        RED.nodes.createNode(this, n)
         
        this.conn = RED.nodes.getNode(n.conn).conn;
        let node = this;
        let cv = null;
        let statusInterval = null;
        
        this.on('input', function(msg, send, done) {
            send = send || function() { node.send.apply(node,arguments) };
            try {
                var msg1, msg2, msg3, msg4, msg5;
                var msg1 = {
                    payload: "Common Header"
                };
                var msg2 = {
                    payload: "Motor 1"
                };
                var msg3 = {
                    payload: "Motor 2"
                };
                var msg4 = {
                    payload: "Motor 3"
                };
                var msg5 = {
                    payload: "Motor 4"
                };
                msg1.triton_status_word_in = node.conn.inputData[0];
                msg1.axis_enable_in = node.conn.inputData[1];
                msg1.axis_status_in = node.conn.inputData[2];
                msg2.force_in = node.conn.inputData[8] + (node.conn.inputData[9] << 8) + (node.conn.inputData[10] << 16) + (node.conn.inputData[11] << 24);
                msg2.position_in = node.conn.inputData[12] + (node.conn.inputData[13] << 8) + (node.conn.inputData[14] << 16) + (node.conn.inputData[15] << 24);
                msg2.speed_in = node.conn.inputData[16] + (node.conn.inputData[17] << 8) + (node.conn.inputData[18] << 16) + (node.conn.inputData[19] << 24);
                msg2.accel_in = node.conn.inputData[20] + (node.conn.inputData[21] << 8) + (node.conn.inputData[22] << 16) + (node.conn.inputData[23] << 24);
                msg2.board_temp_in = node.conn.inputData[24] + (node.conn.inputData[25] << 8) + (node.conn.inputData[26] << 16) + (node.conn.inputData[27] << 24);
                msg2.coil_temp_in = node.conn.inputData[28] + (node.conn.inputData[29] << 8) + (node.conn.inputData[30] << 16) + (node.conn.inputData[31] << 24);
                msg2.voltage_in = node.conn.inputData[32] + (node.conn.inputData[33] << 8) + (node.conn.inputData[34] << 16) + (node.conn.inputData[35] << 24);
                msg2.power_in = node.conn.inputData[36] + (node.conn.inputData[37] << 8) + (node.conn.inputData[38] << 16) + (node.conn.inputData[39] << 24);
                msg2.mode_in = node.conn.inputData[40] + (node.conn.inputData[41] << 8) + (node.conn.inputData[42] << 16) + (node.conn.inputData[43] << 24);
                msg2.errors_in = node.conn.inputData[52] + (node.conn.inputData[53] << 8) + (node.conn.inputData[54] << 16) + (node.conn.inputData[55] << 24);
                msg3.force_in = node.conn.inputData[8] + (node.conn.inputData[9] << 8) + (node.conn.inputData[10] << 16) + (node.conn.inputData[11] << 24);
                msg3.position_in = node.conn.inputData[12] + (node.conn.inputData[13] << 8) + (node.conn.inputData[14] << 16) + (node.conn.inputData[15] << 24);
                msg3.speed_in = node.conn.inputData[16] + (node.conn.inputData[17] << 8) + (node.conn.inputData[18] << 16) + (node.conn.inputData[19] << 24);
                msg3.accel_in = node.conn.inputData[20] + (node.conn.inputData[21] << 8) + (node.conn.inputData[22] << 16) + (node.conn.inputData[23] << 24);
                msg3.board_temp_in = node.conn.inputData[24] + (node.conn.inputData[25] << 8) + (node.conn.inputData[26] << 16) + (node.conn.inputData[27] << 24);
                msg3.coil_temp_in = node.conn.inputData[28] + (node.conn.inputData[29] << 8) + (node.conn.inputData[30] << 16) + (node.conn.inputData[31] << 24);
                msg3.voltage_in = node.conn.inputData[32] + (node.conn.inputData[33] << 8) + (node.conn.inputData[34] << 16) + (node.conn.inputData[35] << 24);
                msg3.power_in = node.conn.inputData[36] + (node.conn.inputData[37] << 8) + (node.conn.inputData[38] << 16) + (node.conn.inputData[39] << 24);
                msg3.mode_in = node.conn.inputData[40] + (node.conn.inputData[41] << 8) + (node.conn.inputData[42] << 16) + (node.conn.inputData[43] << 24);
                msg3.errors_in = node.conn.inputData[52] + (node.conn.inputData[53] << 8) + (node.conn.inputData[54] << 16) + (node.conn.inputData[55] << 24);
                msg4.force_in = node.conn.inputData[8] + (node.conn.inputData[9] << 8) + (node.conn.inputData[10] << 16) + (node.conn.inputData[11] << 24);
                msg4.position_in = node.conn.inputData[12] + (node.conn.inputData[13] << 8) + (node.conn.inputData[14] << 16) + (node.conn.inputData[15] << 24);
                msg4.speed_in = node.conn.inputData[16] + (node.conn.inputData[17] << 8) + (node.conn.inputData[18] << 16) + (node.conn.inputData[19] << 24);
                msg4.accel_in = node.conn.inputData[20] + (node.conn.inputData[21] << 8) + (node.conn.inputData[22] << 16) + (node.conn.inputData[23] << 24);
                msg4.board_temp_in = node.conn.inputData[24] + (node.conn.inputData[25] << 8) + (node.conn.inputData[26] << 16) + (node.conn.inputData[27] << 24);
                msg4.coil_temp_in = node.conn.inputData[28] + (node.conn.inputData[29] << 8) + (node.conn.inputData[30] << 16) + (node.conn.inputData[31] << 24);
                msg4.voltage_in = node.conn.inputData[32] + (node.conn.inputData[33] << 8) + (node.conn.inputData[34] << 16) + (node.conn.inputData[35] << 24);
                msg4.power_in = node.conn.inputData[36] + (node.conn.inputData[37] << 8) + (node.conn.inputData[38] << 16) + (node.conn.inputData[39] << 24);
                msg4.mode_in = node.conn.inputData[40] + (node.conn.inputData[41] << 8) + (node.conn.inputData[42] << 16) + (node.conn.inputData[43] << 24);
                msg4.errors_in = node.conn.inputData[52] + (node.conn.inputData[53] << 8) + (node.conn.inputData[54] << 16) + (node.conn.inputData[55] << 24);
                msg5.force_in = node.conn.inputData[8] + (node.conn.inputData[9] << 8) + (node.conn.inputData[10] << 16) + (node.conn.inputData[11] << 24);
                msg5.position_in = node.conn.inputData[12] + (node.conn.inputData[13] << 8) + (node.conn.inputData[14] << 16) + (node.conn.inputData[15] << 24);
                msg5.speed_in = node.conn.inputData[16] + (node.conn.inputData[17] << 8) + (node.conn.inputData[18] << 16) + (node.conn.inputData[19] << 24);
                msg5.accel_in = node.conn.inputData[20] + (node.conn.inputData[21] << 8) + (node.conn.inputData[22] << 16) + (node.conn.inputData[23] << 24);
                msg5.board_temp_in = node.conn.inputData[24] + (node.conn.inputData[25] << 8) + (node.conn.inputData[26] << 16) + (node.conn.inputData[27] << 24);
                msg5.coil_temp_in = node.conn.inputData[28] + (node.conn.inputData[29] << 8) + (node.conn.inputData[30] << 16) + (node.conn.inputData[31] << 24);
                msg5.voltage_in = node.conn.inputData[32] + (node.conn.inputData[33] << 8) + (node.conn.inputData[34] << 16) + (node.conn.inputData[35] << 24);
                msg5.power_in = node.conn.inputData[36] + (node.conn.inputData[37] << 8) + (node.conn.inputData[38] << 16) + (node.conn.inputData[39] << 24);
                msg5.mode_in = node.conn.inputData[40] + (node.conn.inputData[41] << 8) + (node.conn.inputData[42] << 16) + (node.conn.inputData[43] << 24);
                msg5.errors_in = node.conn.inputData[52] + (node.conn.inputData[53] << 8) + (node.conn.inputData[54] << 16) + (node.conn.inputData[55] << 24);

            } catch {
                msg.payload = 'Error!'
            }
            
            send([msg1, msg2, msg3, msg4, msg5]);
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
            clearInterval(updateInterval)
        })     
    };

    RED.nodes.registerType("Iris eip-io in", InNode);
}