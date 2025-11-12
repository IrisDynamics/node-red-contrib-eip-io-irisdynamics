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
                msg2.force_in       = node.conn.inputData[8]    + (node.conn.inputData[9]  << 8) + (node.conn.inputData[10] << 16) + (node.conn.inputData[11] << 24);
                msg2.position_in    = node.conn.inputData[12]   + (node.conn.inputData[13] << 8) + (node.conn.inputData[14] << 16) + (node.conn.inputData[15] << 24);
                msg2.speed_in       = node.conn.inputData[16]   + (node.conn.inputData[17] << 8) + (node.conn.inputData[18] << 16) + (node.conn.inputData[19] << 24);
                msg2.accel_in       = node.conn.inputData[20]   + (node.conn.inputData[21] << 8) + (node.conn.inputData[22] << 16) + (node.conn.inputData[23] << 24);
                msg2.board_temp_in  = node.conn.inputData[24]   + (node.conn.inputData[25] << 8) + (node.conn.inputData[26] << 16) + (node.conn.inputData[27] << 24);
                msg2.coil_temp_in   = node.conn.inputData[28]   + (node.conn.inputData[29] << 8) + (node.conn.inputData[30] << 16) + (node.conn.inputData[31] << 24);
                msg2.voltage_in     = node.conn.inputData[32]   + (node.conn.inputData[33] << 8) + (node.conn.inputData[34] << 16) + (node.conn.inputData[35] << 24);
                msg2.power_in       = node.conn.inputData[36]   + (node.conn.inputData[37] << 8) + (node.conn.inputData[38] << 16) + (node.conn.inputData[39] << 24);
                msg2.mode_in        = node.conn.inputData[40]   + (node.conn.inputData[41] << 8) + (node.conn.inputData[42] << 16) + (node.conn.inputData[43] << 24);
                msg2.errors_in      = node.conn.inputData[52]   + (node.conn.inputData[53] << 8) + (node.conn.inputData[54] << 16) + (node.conn.inputData[55] << 24);
                msg2.status_bits_in = node.conn.inputData[56]   + (node.conn.inputData[57] << 8) + (node.conn.inputData[58] << 16) + (node.conn.inputData[59] << 24);
                msg3.force_in       = node.conn.inputData[60]   + (node.conn.inputData[61] << 8) + (node.conn.inputData[62] << 16) + (node.conn.inputData[63] << 24);
                msg3.position_in    = node.conn.inputData[64]   + (node.conn.inputData[65] << 8) + (node.conn.inputData[66] << 16) + (node.conn.inputData[67] << 24);
                msg3.speed_in       = node.conn.inputData[68]   + (node.conn.inputData[69] << 8) + (node.conn.inputData[70] << 16) + (node.conn.inputData[71] << 24);
                msg3.accel_in       = node.conn.inputData[72]   + (node.conn.inputData[73] << 8) + (node.conn.inputData[74] << 16) + (node.conn.inputData[75] << 24);
                msg3.board_temp_in  = node.conn.inputData[76]   + (node.conn.inputData[77] << 8) + (node.conn.inputData[78] << 16) + (node.conn.inputData[79] << 24);
                msg3.coil_temp_in   = node.conn.inputData[80]   + (node.conn.inputData[81] << 8) + (node.conn.inputData[82] << 16) + (node.conn.inputData[83] << 24);
                msg3.voltage_in     = node.conn.inputData[84]   + (node.conn.inputData[85] << 8) + (node.conn.inputData[86] << 16) + (node.conn.inputData[87] << 24);
                msg3.power_in       = node.conn.inputData[88]   + (node.conn.inputData[89] << 8) + (node.conn.inputData[90] << 16) + (node.conn.inputData[91] << 24);
                msg3.mode_in        = node.conn.inputData[92]   + (node.conn.inputData[93] << 8) + (node.conn.inputData[94] << 16) + (node.conn.inputData[95] << 24);
                msg3.errors_in      = node.conn.inputData[104]  + (node.conn.inputData[105] << 8) + (node.conn.inputData[106] << 16) + (node.conn.inputData[107] << 24);
                msg3.status_bits_in = node.conn.inputData[108]  + (node.conn.inputData[109] << 8) + (node.conn.inputData[110] << 16) + (node.conn.inputData[111] << 24);
                msg4.force_in       = node.conn.inputData[112]  + (node.conn.inputData[113] << 8) + (node.conn.inputData[114] << 16) + (node.conn.inputData[115] << 24);
                msg4.position_in    = node.conn.inputData[116]  + (node.conn.inputData[117] << 8) + (node.conn.inputData[118] << 16) + (node.conn.inputData[119] << 24);
                msg4.speed_in       = node.conn.inputData[120]  + (node.conn.inputData[121] << 8) + (node.conn.inputData[122] << 16) + (node.conn.inputData[123] << 24);
                msg4.accel_in       = node.conn.inputData[124]  + (node.conn.inputData[125] << 8) + (node.conn.inputData[126] << 16) + (node.conn.inputData[127] << 24);
                msg4.board_temp_in  = node.conn.inputData[128]  + (node.conn.inputData[129] << 8) + (node.conn.inputData[130] << 16) + (node.conn.inputData[131] << 24);
                msg4.coil_temp_in   = node.conn.inputData[132]  + (node.conn.inputData[133] << 8) + (node.conn.inputData[134] << 16) + (node.conn.inputData[135] << 24);
                msg4.voltage_in     = node.conn.inputData[136]  + (node.conn.inputData[137] << 8) + (node.conn.inputData[138] << 16) + (node.conn.inputData[139] << 24);
                msg4.power_in       = node.conn.inputData[140]  + (node.conn.inputData[141] << 8) + (node.conn.inputData[142] << 16) + (node.conn.inputData[143] << 24);
                msg4.mode_in        = node.conn.inputData[144]  + (node.conn.inputData[145] << 8) + (node.conn.inputData[146] << 16) + (node.conn.inputData[147] << 24);
                msg4.errors_in      = node.conn.inputData[156]  + (node.conn.inputData[157] << 8) + (node.conn.inputData[158] << 16) + (node.conn.inputData[159] << 24);
                msg4.status_bits_in = node.conn.inputData[160]  + (node.conn.inputData[161] << 8) + (node.conn.inputData[162] << 16) + (node.conn.inputData[163] << 24);
                msg5.force_in       = node.conn.inputData[164]  + (node.conn.inputData[165] << 8) + (node.conn.inputData[166] << 16) + (node.conn.inputData[167] << 24);
                msg5.position_in    = node.conn.inputData[168]  + (node.conn.inputData[169] << 8) + (node.conn.inputData[170] << 16) + (node.conn.inputData[171] << 24);
                msg5.speed_in       = node.conn.inputData[172]  + (node.conn.inputData[173] << 8) + (node.conn.inputData[174] << 16) + (node.conn.inputData[175] << 24);
                msg5.accel_in       = node.conn.inputData[176]  + (node.conn.inputData[177] << 8) + (node.conn.inputData[178] << 16) + (node.conn.inputData[179] << 24);
                msg5.board_temp_in  = node.conn.inputData[180]  + (node.conn.inputData[181] << 8) + (node.conn.inputData[182] << 16) + (node.conn.inputData[183] << 24);
                msg5.coil_temp_in   = node.conn.inputData[184]  + (node.conn.inputData[185] << 8) + (node.conn.inputData[186] << 16) + (node.conn.inputData[187] << 24);
                msg5.voltage_in     = node.conn.inputData[188]  + (node.conn.inputData[189] << 8) + (node.conn.inputData[190] << 16) + (node.conn.inputData[191] << 24);
                msg5.power_in       = node.conn.inputData[192]  + (node.conn.inputData[193] << 8) + (node.conn.inputData[194] << 16) + (node.conn.inputData[195] << 24);
                msg5.mode_in        = node.conn.inputData[196]  + (node.conn.inputData[197] << 8) + (node.conn.inputData[198] << 16) + (node.conn.inputData[198] << 24);
                msg5.errors_in      = node.conn.inputData[208]  + (node.conn.inputData[209] << 8) + (node.conn.inputData[210] << 16) + (node.conn.inputData[211] << 24);
                msg5.status_bits_in = node.conn.inputData[212]  + (node.conn.inputData[213] << 8) + (node.conn.inputData[214] << 16) + (node.conn.inputData[215] << 24);

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