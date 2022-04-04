package main

import (
	"fmt"
	"reflect"
)

func main() {
	a := reflect.StructOf([]reflect.StructField{{
		Name: "Content",
		Type: reflect.TypeOf(""),
	}})

	fmt.Println(a)

	b := reflect.TypeOf(map[string]interface{}{"content": "content"})
	fmt.Println(b)
}