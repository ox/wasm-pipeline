package main

import (
	"log"
	"net/http"
)

const (
	AddrServ  = ":8970"
	PublicDir = "public"
)

func main() {
	fileSrv := http.FileServer(http.Dir(PublicDir))
	log.Printf("serving on %s\n", AddrServ)
	if err := http.ListenAndServe(AddrServ, fileSrv); err != nil {
		log.Fatalln(err)
	}
}
