class SAuth {
    getInfo() {
        return {
            "id": "SAuth",
            "name": "SAuth",
            "blocks": [{
                    "opcode": "SAuth",
                    "blockType": "SAuth",
                    "text": "Login [id]",
                    "arguments": {
                        "id": {
                            "type": "number",
                            "defaultValue": "3742"
                        }
                    }
                },
            }],
        "menus": { 
        }
        SAuth((id)) {
          console.log("Hello World!')
        }
    };
}
Scratch.extensions.register(new SAuth());
