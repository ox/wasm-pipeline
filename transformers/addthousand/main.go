package main

import (
	"fmt"
	"syscall/js"
)

func addthousand(this js.Value, args []js.Value) interface{} {
	fmt.Printf("processData %x\n", args)
	if len(args) != 1 {
		return "Invalid no of arguments passed"
	}

	dataLength := args[0].Get("length").Int()
	fmt.Println("data length", dataLength)
	output := make([]interface{}, 0)

	for i := 0; i < dataLength; i++ {
		row := args[0].Index(i)
		newRow := make(map[string]interface{})
		newRow["idx"] = row.Get("idx").Int()
		newRow["key"] = row.Get("key").String()
		newRow["value"] = row.Get("value").Int() + 1000
		output = append(output, newRow)
	}

	return output
}

func main() {
	fmt.Println("addthousand loaded")
	js.Global().Call("registerTransformFn", "addthousand", js.FuncOf(addthousand))
	select {}
}
