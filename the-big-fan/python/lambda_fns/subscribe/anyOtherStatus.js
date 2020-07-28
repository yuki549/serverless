"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = async function (event) {
    console.log("request:", JSON.stringify(event, undefined, 2));
    let records = event.Records;
    for (let index in records) {
        let payload = records[index].body;
        console.log('received message ' + payload);
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW55T3RoZXJTdGF0dXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhbnlPdGhlclN0YXR1cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBLE9BQU8sQ0FBQyxPQUFPLEdBQUcsS0FBSyxXQUFVLEtBQVM7SUFDeEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFFN0QsSUFBSSxPQUFPLEdBQVUsS0FBSyxDQUFDLE9BQU8sQ0FBQztJQUVuQyxLQUFJLElBQUksS0FBSyxJQUFJLE9BQU8sRUFBRTtRQUN4QixJQUFJLE9BQU8sR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDO1FBQ2xDLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLEdBQUcsT0FBTyxDQUFDLENBQUM7S0FDNUM7QUFDSCxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQge307XG5cbmV4cG9ydHMuaGFuZGxlciA9IGFzeW5jIGZ1bmN0aW9uKGV2ZW50OmFueSkge1xuICBjb25zb2xlLmxvZyhcInJlcXVlc3Q6XCIsIEpTT04uc3RyaW5naWZ5KGV2ZW50LCB1bmRlZmluZWQsIDIpKTtcblxuICBsZXQgcmVjb3JkczogYW55W10gPSBldmVudC5SZWNvcmRzO1xuICBcbiAgZm9yKGxldCBpbmRleCBpbiByZWNvcmRzKSB7XG4gICAgbGV0IHBheWxvYWQgPSByZWNvcmRzW2luZGV4XS5ib2R5O1xuICAgIGNvbnNvbGUubG9nKCdyZWNlaXZlZCBtZXNzYWdlICcgKyBwYXlsb2FkKTtcbiAgfVxufTsiXX0=