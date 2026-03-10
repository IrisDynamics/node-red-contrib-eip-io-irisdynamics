# Nodes

There are two main nodes in this module, the Iris `eip-io` out node, which is responsible for sending messages to the Ethernet adapter module and the
Iris `eip-io` in node, which is responsible for receiving and parsing the returned message. These nodes both need a connection node to define the ORCA-EIP assemblies.

## Iris eip-io connection

This node has several parameters which have defaults to work with the ORCA-EIP adapter. 
- The IP address is the eth0 port of the ORCA-EIP adapter. 
- The RPI is the ms between messages. The minimum number for this value through node-red is 8 ms, at this time.
- The input and output assembly numbers and size relate to the implicit messaging stream and should not be adjusted.

A scanner node must also be added to the connection node.

## Iris eip-io scanner

The scanner node defines the IP address of the ORCA-EIP scanner. Setting the IP address to 0.0.0.0 binds to all available local network interfaces on the host machine.

## Iris eip-io out

This node forms and sends the ORCA-EIP output assembly which commands the ORCA motors. A connection node must be added to configure this node.

The node expects inputs with the following six topics:

| msg.topic        | Type        | Description         |
| ---------------- | ----------- | ------------------- |
| ORCA-EIP Control | DINT        | Command Bits <br /> .0 - ORCA-EIP/Enable <br /><br /> The first bit of this control word is used as a global enable. If set to 0 all motors will be in sleep, if set to 1 then the Axis Control Enable bits are used. |
| Axis Control     | DINT |.0 - Axis 1 Enable <br/>.1 - Axis 2 Enable <br/>.2 - Axis 3 Enable<br/>.3 - Axis 4 Enable <br/>.4 - Axis 1 Autozero <br/>.5 - Axis 2 Autozero <br />.6 - Axis 3 Autozero <br />.7 - Axis 4 Autozero <br /><br /> If the global enable is set, setting the axis enable bit puts the related ORCA Motor into position mode. Set to low to put the ORCA Motor to sleep and/or clear errors. A rising edge on an Autozero bit will trigger autozeroing (homing) of the associated motor.  |
| Motor 1 Position | DINT          | Position target in µm |
| Motor 2 Position | DINT          | Position target in µm |
| Motor 3 Position | DINT          | Position target in µm |
| Motor 4 Position | DINT          | Position target in µm |

This node processes input data and generates an output; the output data is True once the input has been successfully processed or if an error occurs. 

## Iris eip-io in

This node receives and parses the ORCA-EIP input assembly containing data from the connected ORCA Motors. A connection node must be added to configure this node.

There are five outputs from the node:

1. Common Header
2. Motor 1
3. Motor 2
4. Motor 3
5. Motor 4

These messages each have custom properties.

| Message Property        | Type        | Description                                                                                       |
| ----------------------- | ----------- | ------------------------------------------------------------------------------------------------- |
| `triton_status_word_in` | SINT        | ORCA-EIP Status Bits <br/> .0 - ORCA-EIP Enabled                                                  |
| `axis_enable_in`        | SINT        | .0 - Axis 1 Enabled <br />.1 - Axis 2 Enabled <br/> .3 - Axis 3 Enabled <br/> .4 - Axis 4 Enabled |
| `force_in`              | DINT        | mN (millinewtons)                                                                                 |
| `position_in`           | DINT        | µm (micrometers)                                                                                  |
| `speed_in`              | DINT        | mm/s (0.001 mm/s increments)                                                                      |
| `accel_in`              | DINT        | mm /s²                                                                                            |
| `board_temp_in`         | DINT        | 1°C increments                                                                                    |
| `coil_temp_in`          | DINT        | 1°C increments                                                                                    |
| `voltage_in`            | DINT        | mV                                                                                                |
| `power_in`              | DINT        | W                                                                                                 |
| `mode_in`               | DINT        | ORCA Motor Mode:<br/>1 = Sleep<br/>2 = Force<br/>3 = Position<br/>4 = Haptic<br/>5 = Kinematic<br/>11 = Pulse Width<br/>55 = Auto Zeroing                                                                                                   |
| `errors_in`             | DINT        | Error Bits:<br/>.0 - Configuration<br/>.5 - Force Clipping<br/>.6 - Temp Exceeded<br/>.7 - Force Exceeded<br/>.8 - Power Exceeded<br/>.9 - Shaft Image Failed<br/>.10 - Voltage Invalid<br/>.11 - Comms Timeout<br/>.13 - Auto Zero Failed                                                                                  |
| `status_bit_in`         |             | .0 - Auto Zero complete<br/> .1- Auto Zero in progress                                            |