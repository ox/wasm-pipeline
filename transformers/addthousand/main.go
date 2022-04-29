package main

import (
	"fmt"
	"syscall/js"
)

func addthousand(this js.Value, args []js.Value) interface{} {
	if len(args) != 1 {
		return "Invalid no of arguments passed"
	}

	dataLength := args[0].Get("length").Int()
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
	fmt.Println("addthousand main called")
	js.Global().Call("registerTransformFn", "addthousand", js.FuncOf(addthousand))
	select {}
}
