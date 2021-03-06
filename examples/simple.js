const SerialPort = require('serialport')
const EnoceanParser = require('../ESP3Parser').FullParser

const port = new SerialPort('/dev/ttyUSB0', { baudRate: 57600 })
const parser = port.pipe(new EnoceanParser())

parser.on('data', console.log).on('error', console.error)

// get Base Adress of your TCM... not needed here, this is just to test Response type Packets
port.write(Buffer.from('5500010005700838', 'hex'))
/* eslint-disable no-console  */
