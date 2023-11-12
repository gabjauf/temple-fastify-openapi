// OPENAPI VERSION 3.0.2
export function updatePet(app: any, handler: (request, reply) => any) {
  app.route({
    // {"tags":["pet"],"summary":"Update an existing pet","description":"Update an existing pet by Id","operationId":"updatePet","requestBody":{"description":"Update an existent pet in the store","content":{"application/json":{"schema":{"required":["name","photoUrls"],"type":"object","properties":{"id":{"type":"integer","format":"int64","example":10},"name":{"type":"string","example":"doggie"},"category":{"type":"object","properties":{"id":{"type":"integer","format":"int64","example":1},"name":{"type":"string","example":"Dogs"}},"xml":{"name":"category"}},"photoUrls":{"type":"array","xml":{"wrapped":true},"items":{"type":"string","xml":{"name":"photoUrl"}}},"tags":{"type":"array","xml":{"wrapped":true},"items":{"type":"object","properties":{"id":{"type":"integer","format":"int64"},"name":{"type":"string"}},"xml":{"name":"tag"}}},"status":{"type":"string","description":"pet status in the store","enum":["available","pending","sold"]}},"xml":{"name":"pet"}}},"application/xml":{"schema":{"required":["name","photoUrls"],"type":"object","properties":{"id":{"type":"integer","format":"int64","example":10},"name":{"type":"string","example":"doggie"},"category":{"type":"object","properties":{"id":{"type":"integer","format":"int64","example":1},"name":{"type":"string","example":"Dogs"}},"xml":{"name":"category"}},"photoUrls":{"type":"array","xml":{"wrapped":true},"items":{"type":"string","xml":{"name":"photoUrl"}}},"tags":{"type":"array","xml":{"wrapped":true},"items":{"type":"object","properties":{"id":{"type":"integer","format":"int64"},"name":{"type":"string"}},"xml":{"name":"tag"}}},"status":{"type":"string","description":"pet status in the store","enum":["available","pending","sold"]}},"xml":{"name":"pet"}}},"application/x-www-form-urlencoded":{"schema":{"required":["name","photoUrls"],"type":"object","properties":{"id":{"type":"integer","format":"int64","example":10},"name":{"type":"string","example":"doggie"},"category":{"type":"object","properties":{"id":{"type":"integer","format":"int64","example":1},"name":{"type":"string","example":"Dogs"}},"xml":{"name":"category"}},"photoUrls":{"type":"array","xml":{"wrapped":true},"items":{"type":"string","xml":{"name":"photoUrl"}}},"tags":{"type":"array","xml":{"wrapped":true},"items":{"type":"object","properties":{"id":{"type":"integer","format":"int64"},"name":{"type":"string"}},"xml":{"name":"tag"}}},"status":{"type":"string","description":"pet status in the store","enum":["available","pending","sold"]}},"xml":{"name":"pet"}}}},"required":true},"responses":{"200":{"description":"Successful operation","content":{"application/xml":{"schema":{"required":["name","photoUrls"],"type":"object","properties":{"id":{"type":"integer","format":"int64","example":10},"name":{"type":"string","example":"doggie"},"category":{"type":"object","properties":{"id":{"type":"integer","format":"int64","example":1},"name":{"type":"string","example":"Dogs"}},"xml":{"name":"category"}},"photoUrls":{"type":"array","xml":{"wrapped":true},"items":{"type":"string","xml":{"name":"photoUrl"}}},"tags":{"type":"array","xml":{"wrapped":true},"items":{"type":"object","properties":{"id":{"type":"integer","format":"int64"},"name":{"type":"string"}},"xml":{"name":"tag"}}},"status":{"type":"string","description":"pet status in the store","enum":["available","pending","sold"]}},"xml":{"name":"pet"}}},"application/json":{"schema":{"required":["name","photoUrls"],"type":"object","properties":{"id":{"type":"integer","format":"int64","example":10},"name":{"type":"string","example":"doggie"},"category":{"type":"object","properties":{"id":{"type":"integer","format":"int64","example":1},"name":{"type":"string","example":"Dogs"}},"xml":{"name":"category"}},"photoUrls":{"type":"array","xml":{"wrapped":true},"items":{"type":"string","xml":{"name":"photoUrl"}}},"tags":{"type":"array","xml":{"wrapped":true},"items":{"type":"object","properties":{"id":{"type":"integer","format":"int64"},"name":{"type":"string"}},"xml":{"name":"tag"}}},"status":{"type":"string","description":"pet status in the store","enum":["available","pending","sold"]}},"xml":{"name":"pet"}}}}},"400":{"description":"Invalid ID supplied"},"404":{"description":"Pet not found"},"405":{"description":"Validation exception"}},"security":[{"petstore_auth":["write:pets","read:pets"]}]}
    method: 'PUT',
    url: '/pet',
    schema: {

      response: {
                          200 : {
  "application/xml": {
    "schema": {
      "required": [
        "name",
        "photoUrls"
      ],
      "type": "object",
      "properties": {
        "id": {
          "type": "integer",
          "format": "int64",
          "example": 10
        },
        "name": {
          "type": "string",
          "example": "doggie"
        },
        "category": {
          "type": "object",
          "properties": {
            "id": {
              "type": "integer",
              "format": "int64",
              "example": 1
            },
            "name": {
              "type": "string",
              "example": "Dogs"
            }
          },
          "xml": {
            "name": "category"
          }
        },
        "photoUrls": {
          "type": "array",
          "xml": {
            "wrapped": true
          },
          "items": {
            "type": "string",
            "xml": {
              "name": "photoUrl"
            }
          }
        },
        "tags": {
          "type": "array",
          "xml": {
            "wrapped": true
          },
          "items": {
            "type": "object",
            "properties": {
              "id": {
                "type": "integer",
                "format": "int64"
              },
              "name": {
                "type": "string"
              }
            },
            "xml": {
              "name": "tag"
            }
          }
        },
        "status": {
          "type": "string",
          "description": "pet status in the store",
          "enum": [
            "available",
            "pending",
            "sold"
          ]
        }
      },
      "xml": {
        "name": "pet"
      }
    }
  },
  "application/json": {
    "schema": {
      "required": [
        "name",
        "photoUrls"
      ],
      "type": "object",
      "properties": {
        "id": {
          "type": "integer",
          "format": "int64",
          "example": 10
        },
        "name": {
          "type": "string",
          "example": "doggie"
        },
        "category": {
          "type": "object",
          "properties": {
            "id": {
              "type": "integer",
              "format": "int64",
              "example": 1
            },
            "name": {
              "type": "string",
              "example": "Dogs"
            }
          },
          "xml": {
            "name": "category"
          }
        },
        "photoUrls": {
          "type": "array",
          "xml": {
            "wrapped": true
          },
          "items": {
            "type": "string",
            "xml": {
              "name": "photoUrl"
            }
          }
        },
        "tags": {
          "type": "array",
          "xml": {
            "wrapped": true
          },
          "items": {
            "type": "object",
            "properties": {
              "id": {
                "type": "integer",
                "format": "int64"
              },
              "name": {
                "type": "string"
              }
            },
            "xml": {
              "name": "tag"
            }
          }
        },
        "status": {
          "type": "string",
          "description": "pet status in the store",
          "enum": [
            "available",
            "pending",
            "sold"
          ]
        }
      },
      "xml": {
        "name": "pet"
      }
    }
  }
}                                                                      }
    },
    handler: handler || function (request, reply) {
      reply.send('updatePet not implemented')
    }
  })
}
export function addPet(app: any, handler: (request, reply) => any) {
  app.route({
    // {"tags":["pet"],"summary":"Add a new pet to the store","description":"Add a new pet to the store","operationId":"addPet","requestBody":{"description":"Create a new pet in the store","content":{"application/json":{"schema":{"required":["name","photoUrls"],"type":"object","properties":{"id":{"type":"integer","format":"int64","example":10},"name":{"type":"string","example":"doggie"},"category":{"type":"object","properties":{"id":{"type":"integer","format":"int64","example":1},"name":{"type":"string","example":"Dogs"}},"xml":{"name":"category"}},"photoUrls":{"type":"array","xml":{"wrapped":true},"items":{"type":"string","xml":{"name":"photoUrl"}}},"tags":{"type":"array","xml":{"wrapped":true},"items":{"type":"object","properties":{"id":{"type":"integer","format":"int64"},"name":{"type":"string"}},"xml":{"name":"tag"}}},"status":{"type":"string","description":"pet status in the store","enum":["available","pending","sold"]}},"xml":{"name":"pet"}}},"application/xml":{"schema":{"required":["name","photoUrls"],"type":"object","properties":{"id":{"type":"integer","format":"int64","example":10},"name":{"type":"string","example":"doggie"},"category":{"type":"object","properties":{"id":{"type":"integer","format":"int64","example":1},"name":{"type":"string","example":"Dogs"}},"xml":{"name":"category"}},"photoUrls":{"type":"array","xml":{"wrapped":true},"items":{"type":"string","xml":{"name":"photoUrl"}}},"tags":{"type":"array","xml":{"wrapped":true},"items":{"type":"object","properties":{"id":{"type":"integer","format":"int64"},"name":{"type":"string"}},"xml":{"name":"tag"}}},"status":{"type":"string","description":"pet status in the store","enum":["available","pending","sold"]}},"xml":{"name":"pet"}}},"application/x-www-form-urlencoded":{"schema":{"required":["name","photoUrls"],"type":"object","properties":{"id":{"type":"integer","format":"int64","example":10},"name":{"type":"string","example":"doggie"},"category":{"type":"object","properties":{"id":{"type":"integer","format":"int64","example":1},"name":{"type":"string","example":"Dogs"}},"xml":{"name":"category"}},"photoUrls":{"type":"array","xml":{"wrapped":true},"items":{"type":"string","xml":{"name":"photoUrl"}}},"tags":{"type":"array","xml":{"wrapped":true},"items":{"type":"object","properties":{"id":{"type":"integer","format":"int64"},"name":{"type":"string"}},"xml":{"name":"tag"}}},"status":{"type":"string","description":"pet status in the store","enum":["available","pending","sold"]}},"xml":{"name":"pet"}}}},"required":true},"responses":{"200":{"description":"Successful operation","content":{"application/xml":{"schema":{"required":["name","photoUrls"],"type":"object","properties":{"id":{"type":"integer","format":"int64","example":10},"name":{"type":"string","example":"doggie"},"category":{"type":"object","properties":{"id":{"type":"integer","format":"int64","example":1},"name":{"type":"string","example":"Dogs"}},"xml":{"name":"category"}},"photoUrls":{"type":"array","xml":{"wrapped":true},"items":{"type":"string","xml":{"name":"photoUrl"}}},"tags":{"type":"array","xml":{"wrapped":true},"items":{"type":"object","properties":{"id":{"type":"integer","format":"int64"},"name":{"type":"string"}},"xml":{"name":"tag"}}},"status":{"type":"string","description":"pet status in the store","enum":["available","pending","sold"]}},"xml":{"name":"pet"}}},"application/json":{"schema":{"required":["name","photoUrls"],"type":"object","properties":{"id":{"type":"integer","format":"int64","example":10},"name":{"type":"string","example":"doggie"},"category":{"type":"object","properties":{"id":{"type":"integer","format":"int64","example":1},"name":{"type":"string","example":"Dogs"}},"xml":{"name":"category"}},"photoUrls":{"type":"array","xml":{"wrapped":true},"items":{"type":"string","xml":{"name":"photoUrl"}}},"tags":{"type":"array","xml":{"wrapped":true},"items":{"type":"object","properties":{"id":{"type":"integer","format":"int64"},"name":{"type":"string"}},"xml":{"name":"tag"}}},"status":{"type":"string","description":"pet status in the store","enum":["available","pending","sold"]}},"xml":{"name":"pet"}}}}},"405":{"description":"Invalid input"}},"security":[{"petstore_auth":["write:pets","read:pets"]}]}
    method: 'POST',
    url: '/pet',
    schema: {

      response: {
                          200 : {
  "application/xml": {
    "schema": {
      "required": [
        "name",
        "photoUrls"
      ],
      "type": "object",
      "properties": {
        "id": {
          "type": "integer",
          "format": "int64",
          "example": 10
        },
        "name": {
          "type": "string",
          "example": "doggie"
        },
        "category": {
          "type": "object",
          "properties": {
            "id": {
              "type": "integer",
              "format": "int64",
              "example": 1
            },
            "name": {
              "type": "string",
              "example": "Dogs"
            }
          },
          "xml": {
            "name": "category"
          }
        },
        "photoUrls": {
          "type": "array",
          "xml": {
            "wrapped": true
          },
          "items": {
            "type": "string",
            "xml": {
              "name": "photoUrl"
            }
          }
        },
        "tags": {
          "type": "array",
          "xml": {
            "wrapped": true
          },
          "items": {
            "type": "object",
            "properties": {
              "id": {
                "type": "integer",
                "format": "int64"
              },
              "name": {
                "type": "string"
              }
            },
            "xml": {
              "name": "tag"
            }
          }
        },
        "status": {
          "type": "string",
          "description": "pet status in the store",
          "enum": [
            "available",
            "pending",
            "sold"
          ]
        }
      },
      "xml": {
        "name": "pet"
      }
    }
  },
  "application/json": {
    "schema": {
      "required": [
        "name",
        "photoUrls"
      ],
      "type": "object",
      "properties": {
        "id": {
          "type": "integer",
          "format": "int64",
          "example": 10
        },
        "name": {
          "type": "string",
          "example": "doggie"
        },
        "category": {
          "type": "object",
          "properties": {
            "id": {
              "type": "integer",
              "format": "int64",
              "example": 1
            },
            "name": {
              "type": "string",
              "example": "Dogs"
            }
          },
          "xml": {
            "name": "category"
          }
        },
        "photoUrls": {
          "type": "array",
          "xml": {
            "wrapped": true
          },
          "items": {
            "type": "string",
            "xml": {
              "name": "photoUrl"
            }
          }
        },
        "tags": {
          "type": "array",
          "xml": {
            "wrapped": true
          },
          "items": {
            "type": "object",
            "properties": {
              "id": {
                "type": "integer",
                "format": "int64"
              },
              "name": {
                "type": "string"
              }
            },
            "xml": {
              "name": "tag"
            }
          }
        },
        "status": {
          "type": "string",
          "description": "pet status in the store",
          "enum": [
            "available",
            "pending",
            "sold"
          ]
        }
      },
      "xml": {
        "name": "pet"
      }
    }
  }
}                                      }
    },
    handler: handler || function (request, reply) {
      reply.send('addPet not implemented')
    }
  })
}
export function findPetsByStatus(app: any, handler: (request, reply) => any) {
  app.route({
    // {"tags":["pet"],"summary":"Finds Pets by status","description":"Multiple status values can be provided with comma separated strings","operationId":"findPetsByStatus","parameters":[{"name":"status","in":"query","description":"Status values that need to be considered for filter","required":false,"explode":true,"schema":{"type":"string","default":"available","enum":["available","pending","sold"]}}],"responses":{"200":{"description":"successful operation","content":{"application/xml":{"schema":{"type":"array","items":{"required":["name","photoUrls"],"type":"object","properties":{"id":{"type":"integer","format":"int64","example":10},"name":{"type":"string","example":"doggie"},"category":{"type":"object","properties":{"id":{"type":"integer","format":"int64","example":1},"name":{"type":"string","example":"Dogs"}},"xml":{"name":"category"}},"photoUrls":{"type":"array","xml":{"wrapped":true},"items":{"type":"string","xml":{"name":"photoUrl"}}},"tags":{"type":"array","xml":{"wrapped":true},"items":{"type":"object","properties":{"id":{"type":"integer","format":"int64"},"name":{"type":"string"}},"xml":{"name":"tag"}}},"status":{"type":"string","description":"pet status in the store","enum":["available","pending","sold"]}},"xml":{"name":"pet"}}}},"application/json":{"schema":{"type":"array","items":{"required":["name","photoUrls"],"type":"object","properties":{"id":{"type":"integer","format":"int64","example":10},"name":{"type":"string","example":"doggie"},"category":{"type":"object","properties":{"id":{"type":"integer","format":"int64","example":1},"name":{"type":"string","example":"Dogs"}},"xml":{"name":"category"}},"photoUrls":{"type":"array","xml":{"wrapped":true},"items":{"type":"string","xml":{"name":"photoUrl"}}},"tags":{"type":"array","xml":{"wrapped":true},"items":{"type":"object","properties":{"id":{"type":"integer","format":"int64"},"name":{"type":"string"}},"xml":{"name":"tag"}}},"status":{"type":"string","description":"pet status in the store","enum":["available","pending","sold"]}},"xml":{"name":"pet"}}}}}},"400":{"description":"Invalid status value"}},"security":[{"petstore_auth":["write:pets","read:pets"]}]}
    method: 'GET',
    url: '/pet/findByStatus',
    schema: {

      response: {
                          200 : {
  "application/xml": {
    "schema": {
      "type": "array",
      "items": {
        "required": [
          "name",
          "photoUrls"
        ],
        "type": "object",
        "properties": {
          "id": {
            "type": "integer",
            "format": "int64",
            "example": 10
          },
          "name": {
            "type": "string",
            "example": "doggie"
          },
          "category": {
            "type": "object",
            "properties": {
              "id": {
                "type": "integer",
                "format": "int64",
                "example": 1
              },
              "name": {
                "type": "string",
                "example": "Dogs"
              }
            },
            "xml": {
              "name": "category"
            }
          },
          "photoUrls": {
            "type": "array",
            "xml": {
              "wrapped": true
            },
            "items": {
              "type": "string",
              "xml": {
                "name": "photoUrl"
              }
            }
          },
          "tags": {
            "type": "array",
            "xml": {
              "wrapped": true
            },
            "items": {
              "type": "object",
              "properties": {
                "id": {
                  "type": "integer",
                  "format": "int64"
                },
                "name": {
                  "type": "string"
                }
              },
              "xml": {
                "name": "tag"
              }
            }
          },
          "status": {
            "type": "string",
            "description": "pet status in the store",
            "enum": [
              "available",
              "pending",
              "sold"
            ]
          }
        },
        "xml": {
          "name": "pet"
        }
      }
    }
  },
  "application/json": {
    "schema": {
      "type": "array",
      "items": {
        "required": [
          "name",
          "photoUrls"
        ],
        "type": "object",
        "properties": {
          "id": {
            "type": "integer",
            "format": "int64",
            "example": 10
          },
          "name": {
            "type": "string",
            "example": "doggie"
          },
          "category": {
            "type": "object",
            "properties": {
              "id": {
                "type": "integer",
                "format": "int64",
                "example": 1
              },
              "name": {
                "type": "string",
                "example": "Dogs"
              }
            },
            "xml": {
              "name": "category"
            }
          },
          "photoUrls": {
            "type": "array",
            "xml": {
              "wrapped": true
            },
            "items": {
              "type": "string",
              "xml": {
                "name": "photoUrl"
              }
            }
          },
          "tags": {
            "type": "array",
            "xml": {
              "wrapped": true
            },
            "items": {
              "type": "object",
              "properties": {
                "id": {
                  "type": "integer",
                  "format": "int64"
                },
                "name": {
                  "type": "string"
                }
              },
              "xml": {
                "name": "tag"
              }
            }
          },
          "status": {
            "type": "string",
            "description": "pet status in the store",
            "enum": [
              "available",
              "pending",
              "sold"
            ]
          }
        },
        "xml": {
          "name": "pet"
        }
      }
    }
  }
}                                      }
    },
    handler: handler || function (request, reply) {
      reply.send('findPetsByStatus not implemented')
    }
  })
}
export function findPetsByTags(app: any, handler: (request, reply) => any) {
  app.route({
    // {"tags":["pet"],"summary":"Finds Pets by tags","description":"Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.","operationId":"findPetsByTags","parameters":[{"name":"tags","in":"query","description":"Tags to filter by","required":false,"explode":true,"schema":{"type":"array","items":{"type":"string"}}}],"responses":{"200":{"description":"successful operation","content":{"application/xml":{"schema":{"type":"array","items":{"required":["name","photoUrls"],"type":"object","properties":{"id":{"type":"integer","format":"int64","example":10},"name":{"type":"string","example":"doggie"},"category":{"type":"object","properties":{"id":{"type":"integer","format":"int64","example":1},"name":{"type":"string","example":"Dogs"}},"xml":{"name":"category"}},"photoUrls":{"type":"array","xml":{"wrapped":true},"items":{"type":"string","xml":{"name":"photoUrl"}}},"tags":{"type":"array","xml":{"wrapped":true},"items":{"type":"object","properties":{"id":{"type":"integer","format":"int64"},"name":{"type":"string"}},"xml":{"name":"tag"}}},"status":{"type":"string","description":"pet status in the store","enum":["available","pending","sold"]}},"xml":{"name":"pet"}}}},"application/json":{"schema":{"type":"array","items":{"required":["name","photoUrls"],"type":"object","properties":{"id":{"type":"integer","format":"int64","example":10},"name":{"type":"string","example":"doggie"},"category":{"type":"object","properties":{"id":{"type":"integer","format":"int64","example":1},"name":{"type":"string","example":"Dogs"}},"xml":{"name":"category"}},"photoUrls":{"type":"array","xml":{"wrapped":true},"items":{"type":"string","xml":{"name":"photoUrl"}}},"tags":{"type":"array","xml":{"wrapped":true},"items":{"type":"object","properties":{"id":{"type":"integer","format":"int64"},"name":{"type":"string"}},"xml":{"name":"tag"}}},"status":{"type":"string","description":"pet status in the store","enum":["available","pending","sold"]}},"xml":{"name":"pet"}}}}}},"400":{"description":"Invalid tag value"}},"security":[{"petstore_auth":["write:pets","read:pets"]}]}
    method: 'GET',
    url: '/pet/findByTags',
    schema: {

      response: {
                          200 : {
  "application/xml": {
    "schema": {
      "type": "array",
      "items": {
        "required": [
          "name",
          "photoUrls"
        ],
        "type": "object",
        "properties": {
          "id": {
            "type": "integer",
            "format": "int64",
            "example": 10
          },
          "name": {
            "type": "string",
            "example": "doggie"
          },
          "category": {
            "type": "object",
            "properties": {
              "id": {
                "type": "integer",
                "format": "int64",
                "example": 1
              },
              "name": {
                "type": "string",
                "example": "Dogs"
              }
            },
            "xml": {
              "name": "category"
            }
          },
          "photoUrls": {
            "type": "array",
            "xml": {
              "wrapped": true
            },
            "items": {
              "type": "string",
              "xml": {
                "name": "photoUrl"
              }
            }
          },
          "tags": {
            "type": "array",
            "xml": {
              "wrapped": true
            },
            "items": {
              "type": "object",
              "properties": {
                "id": {
                  "type": "integer",
                  "format": "int64"
                },
                "name": {
                  "type": "string"
                }
              },
              "xml": {
                "name": "tag"
              }
            }
          },
          "status": {
            "type": "string",
            "description": "pet status in the store",
            "enum": [
              "available",
              "pending",
              "sold"
            ]
          }
        },
        "xml": {
          "name": "pet"
        }
      }
    }
  },
  "application/json": {
    "schema": {
      "type": "array",
      "items": {
        "required": [
          "name",
          "photoUrls"
        ],
        "type": "object",
        "properties": {
          "id": {
            "type": "integer",
            "format": "int64",
            "example": 10
          },
          "name": {
            "type": "string",
            "example": "doggie"
          },
          "category": {
            "type": "object",
            "properties": {
              "id": {
                "type": "integer",
                "format": "int64",
                "example": 1
              },
              "name": {
                "type": "string",
                "example": "Dogs"
              }
            },
            "xml": {
              "name": "category"
            }
          },
          "photoUrls": {
            "type": "array",
            "xml": {
              "wrapped": true
            },
            "items": {
              "type": "string",
              "xml": {
                "name": "photoUrl"
              }
            }
          },
          "tags": {
            "type": "array",
            "xml": {
              "wrapped": true
            },
            "items": {
              "type": "object",
              "properties": {
                "id": {
                  "type": "integer",
                  "format": "int64"
                },
                "name": {
                  "type": "string"
                }
              },
              "xml": {
                "name": "tag"
              }
            }
          },
          "status": {
            "type": "string",
            "description": "pet status in the store",
            "enum": [
              "available",
              "pending",
              "sold"
            ]
          }
        },
        "xml": {
          "name": "pet"
        }
      }
    }
  }
}                                      }
    },
    handler: handler || function (request, reply) {
      reply.send('findPetsByTags not implemented')
    }
  })
}
export function getPetById(app: any, handler: (request, reply) => any) {
  app.route({
    // {"tags":["pet"],"summary":"Find pet by ID","description":"Returns a single pet","operationId":"getPetById","parameters":[{"name":"petId","in":"path","description":"ID of pet to return","required":true,"schema":{"type":"integer","format":"int64"}}],"responses":{"200":{"description":"successful operation","content":{"application/xml":{"schema":{"required":["name","photoUrls"],"type":"object","properties":{"id":{"type":"integer","format":"int64","example":10},"name":{"type":"string","example":"doggie"},"category":{"type":"object","properties":{"id":{"type":"integer","format":"int64","example":1},"name":{"type":"string","example":"Dogs"}},"xml":{"name":"category"}},"photoUrls":{"type":"array","xml":{"wrapped":true},"items":{"type":"string","xml":{"name":"photoUrl"}}},"tags":{"type":"array","xml":{"wrapped":true},"items":{"type":"object","properties":{"id":{"type":"integer","format":"int64"},"name":{"type":"string"}},"xml":{"name":"tag"}}},"status":{"type":"string","description":"pet status in the store","enum":["available","pending","sold"]}},"xml":{"name":"pet"}}},"application/json":{"schema":{"required":["name","photoUrls"],"type":"object","properties":{"id":{"type":"integer","format":"int64","example":10},"name":{"type":"string","example":"doggie"},"category":{"type":"object","properties":{"id":{"type":"integer","format":"int64","example":1},"name":{"type":"string","example":"Dogs"}},"xml":{"name":"category"}},"photoUrls":{"type":"array","xml":{"wrapped":true},"items":{"type":"string","xml":{"name":"photoUrl"}}},"tags":{"type":"array","xml":{"wrapped":true},"items":{"type":"object","properties":{"id":{"type":"integer","format":"int64"},"name":{"type":"string"}},"xml":{"name":"tag"}}},"status":{"type":"string","description":"pet status in the store","enum":["available","pending","sold"]}},"xml":{"name":"pet"}}}}},"400":{"description":"Invalid ID supplied"},"404":{"description":"Pet not found"}},"security":[{"api_key":[]},{"petstore_auth":["write:pets","read:pets"]}]}
    method: 'GET',
    url: '/pet/:petId',
    schema: {

      response: {
                          200 : {
  "application/xml": {
    "schema": {
      "required": [
        "name",
        "photoUrls"
      ],
      "type": "object",
      "properties": {
        "id": {
          "type": "integer",
          "format": "int64",
          "example": 10
        },
        "name": {
          "type": "string",
          "example": "doggie"
        },
        "category": {
          "type": "object",
          "properties": {
            "id": {
              "type": "integer",
              "format": "int64",
              "example": 1
            },
            "name": {
              "type": "string",
              "example": "Dogs"
            }
          },
          "xml": {
            "name": "category"
          }
        },
        "photoUrls": {
          "type": "array",
          "xml": {
            "wrapped": true
          },
          "items": {
            "type": "string",
            "xml": {
              "name": "photoUrl"
            }
          }
        },
        "tags": {
          "type": "array",
          "xml": {
            "wrapped": true
          },
          "items": {
            "type": "object",
            "properties": {
              "id": {
                "type": "integer",
                "format": "int64"
              },
              "name": {
                "type": "string"
              }
            },
            "xml": {
              "name": "tag"
            }
          }
        },
        "status": {
          "type": "string",
          "description": "pet status in the store",
          "enum": [
            "available",
            "pending",
            "sold"
          ]
        }
      },
      "xml": {
        "name": "pet"
      }
    }
  },
  "application/json": {
    "schema": {
      "required": [
        "name",
        "photoUrls"
      ],
      "type": "object",
      "properties": {
        "id": {
          "type": "integer",
          "format": "int64",
          "example": 10
        },
        "name": {
          "type": "string",
          "example": "doggie"
        },
        "category": {
          "type": "object",
          "properties": {
            "id": {
              "type": "integer",
              "format": "int64",
              "example": 1
            },
            "name": {
              "type": "string",
              "example": "Dogs"
            }
          },
          "xml": {
            "name": "category"
          }
        },
        "photoUrls": {
          "type": "array",
          "xml": {
            "wrapped": true
          },
          "items": {
            "type": "string",
            "xml": {
              "name": "photoUrl"
            }
          }
        },
        "tags": {
          "type": "array",
          "xml": {
            "wrapped": true
          },
          "items": {
            "type": "object",
            "properties": {
              "id": {
                "type": "integer",
                "format": "int64"
              },
              "name": {
                "type": "string"
              }
            },
            "xml": {
              "name": "tag"
            }
          }
        },
        "status": {
          "type": "string",
          "description": "pet status in the store",
          "enum": [
            "available",
            "pending",
            "sold"
          ]
        }
      },
      "xml": {
        "name": "pet"
      }
    }
  }
}                                                      }
    },
    handler: handler || function (request, reply) {
      reply.send('getPetById not implemented')
    }
  })
}
export function updatePetWithForm(app: any, handler: (request, reply) => any) {
  app.route({
    // {"tags":["pet"],"summary":"Updates a pet in the store with form data","description":"","operationId":"updatePetWithForm","parameters":[{"name":"petId","in":"path","description":"ID of pet that needs to be updated","required":true,"schema":{"type":"integer","format":"int64"}},{"name":"name","in":"query","description":"Name of pet that needs to be updated","schema":{"type":"string"}},{"name":"status","in":"query","description":"Status of pet that needs to be updated","schema":{"type":"string"}}],"responses":{"405":{"description":"Invalid input"}},"security":[{"petstore_auth":["write:pets","read:pets"]}]}
    method: 'POST',
    url: '/pet/:petId',
    schema: {

      response: {
                              }
    },
    handler: handler || function (request, reply) {
      reply.send('updatePetWithForm not implemented')
    }
  })
}
export function deletePet(app: any, handler: (request, reply) => any) {
  app.route({
    // {"tags":["pet"],"summary":"Deletes a pet","description":"","operationId":"deletePet","parameters":[{"name":"api_key","in":"header","description":"","required":false,"schema":{"type":"string"}},{"name":"petId","in":"path","description":"Pet id to delete","required":true,"schema":{"type":"integer","format":"int64"}}],"responses":{"400":{"description":"Invalid pet value"}},"security":[{"petstore_auth":["write:pets","read:pets"]}]}
    method: 'DELETE',
    url: '/pet/:petId',
    schema: {

      response: {
                              }
    },
    handler: handler || function (request, reply) {
      reply.send('deletePet not implemented')
    }
  })
}
export function uploadFile(app: any, handler: (request, reply) => any) {
  app.route({
    // {"tags":["pet"],"summary":"uploads an image","description":"","operationId":"uploadFile","parameters":[{"name":"petId","in":"path","description":"ID of pet to update","required":true,"schema":{"type":"integer","format":"int64"}},{"name":"additionalMetadata","in":"query","description":"Additional Metadata","required":false,"schema":{"type":"string"}}],"requestBody":{"content":{"application/octet-stream":{"schema":{"type":"string","format":"binary"}}}},"responses":{"200":{"description":"successful operation","content":{"application/json":{"schema":{"type":"object","properties":{"code":{"type":"integer","format":"int32"},"type":{"type":"string"},"message":{"type":"string"}},"xml":{"name":"##default"}}}}}},"security":[{"petstore_auth":["write:pets","read:pets"]}]}
    method: 'POST',
    url: '/pet/:petId/uploadImage',
    schema: {

      response: {
                          200 : {
  "application/json": {
    "schema": {
      "type": "object",
      "properties": {
        "code": {
          "type": "integer",
          "format": "int32"
        },
        "type": {
          "type": "string"
        },
        "message": {
          "type": "string"
        }
      },
      "xml": {
        "name": "##default"
      }
    }
  }
}                      }
    },
    handler: handler || function (request, reply) {
      reply.send('uploadFile not implemented')
    }
  })
}
export function getInventory(app: any, handler: (request, reply) => any) {
  app.route({
    // {"tags":["store"],"summary":"Returns pet inventories by status","description":"Returns a map of status codes to quantities","operationId":"getInventory","responses":{"200":{"description":"successful operation","content":{"application/json":{"schema":{"type":"object","additionalProperties":{"type":"integer","format":"int32"}}}}}},"security":[{"api_key":[]}]}
    method: 'GET',
    url: '/store/inventory',
    schema: {

      response: {
                          200 : {
  "application/json": {
    "schema": {
      "type": "object",
      "additionalProperties": {
        "type": "integer",
        "format": "int32"
      }
    }
  }
}                      }
    },
    handler: handler || function (request, reply) {
      reply.send('getInventory not implemented')
    }
  })
}
export function placeOrder(app: any, handler: (request, reply) => any) {
  app.route({
    // {"tags":["store"],"summary":"Place an order for a pet","description":"Place a new order in the store","operationId":"placeOrder","requestBody":{"content":{"application/json":{"schema":{"type":"object","properties":{"id":{"type":"integer","format":"int64","example":10},"petId":{"type":"integer","format":"int64","example":198772},"quantity":{"type":"integer","format":"int32","example":7},"shipDate":{"type":"string","format":"date-time"},"status":{"type":"string","description":"Order Status","example":"approved","enum":["placed","approved","delivered"]},"complete":{"type":"boolean"}},"xml":{"name":"order"}}},"application/xml":{"schema":{"type":"object","properties":{"id":{"type":"integer","format":"int64","example":10},"petId":{"type":"integer","format":"int64","example":198772},"quantity":{"type":"integer","format":"int32","example":7},"shipDate":{"type":"string","format":"date-time"},"status":{"type":"string","description":"Order Status","example":"approved","enum":["placed","approved","delivered"]},"complete":{"type":"boolean"}},"xml":{"name":"order"}}},"application/x-www-form-urlencoded":{"schema":{"type":"object","properties":{"id":{"type":"integer","format":"int64","example":10},"petId":{"type":"integer","format":"int64","example":198772},"quantity":{"type":"integer","format":"int32","example":7},"shipDate":{"type":"string","format":"date-time"},"status":{"type":"string","description":"Order Status","example":"approved","enum":["placed","approved","delivered"]},"complete":{"type":"boolean"}},"xml":{"name":"order"}}}}},"responses":{"200":{"description":"successful operation","content":{"application/json":{"schema":{"type":"object","properties":{"id":{"type":"integer","format":"int64","example":10},"petId":{"type":"integer","format":"int64","example":198772},"quantity":{"type":"integer","format":"int32","example":7},"shipDate":{"type":"string","format":"date-time"},"status":{"type":"string","description":"Order Status","example":"approved","enum":["placed","approved","delivered"]},"complete":{"type":"boolean"}},"xml":{"name":"order"}}}}},"405":{"description":"Invalid input"}}}
    method: 'POST',
    url: '/store/order',
    schema: {

      response: {
                          200 : {
  "application/json": {
    "schema": {
      "type": "object",
      "properties": {
        "id": {
          "type": "integer",
          "format": "int64",
          "example": 10
        },
        "petId": {
          "type": "integer",
          "format": "int64",
          "example": 198772
        },
        "quantity": {
          "type": "integer",
          "format": "int32",
          "example": 7
        },
        "shipDate": {
          "type": "string",
          "format": "date-time"
        },
        "status": {
          "type": "string",
          "description": "Order Status",
          "example": "approved",
          "enum": [
            "placed",
            "approved",
            "delivered"
          ]
        },
        "complete": {
          "type": "boolean"
        }
      },
      "xml": {
        "name": "order"
      }
    }
  }
}                                      }
    },
    handler: handler || function (request, reply) {
      reply.send('placeOrder not implemented')
    }
  })
}
export function getOrderById(app: any, handler: (request, reply) => any) {
  app.route({
    // {"tags":["store"],"summary":"Find purchase order by ID","description":"For valid response try integer IDs with value <= 5 or > 10. Other values will generate exceptions.","operationId":"getOrderById","parameters":[{"name":"orderId","in":"path","description":"ID of order that needs to be fetched","required":true,"schema":{"type":"integer","format":"int64"}}],"responses":{"200":{"description":"successful operation","content":{"application/xml":{"schema":{"type":"object","properties":{"id":{"type":"integer","format":"int64","example":10},"petId":{"type":"integer","format":"int64","example":198772},"quantity":{"type":"integer","format":"int32","example":7},"shipDate":{"type":"string","format":"date-time"},"status":{"type":"string","description":"Order Status","example":"approved","enum":["placed","approved","delivered"]},"complete":{"type":"boolean"}},"xml":{"name":"order"}}},"application/json":{"schema":{"type":"object","properties":{"id":{"type":"integer","format":"int64","example":10},"petId":{"type":"integer","format":"int64","example":198772},"quantity":{"type":"integer","format":"int32","example":7},"shipDate":{"type":"string","format":"date-time"},"status":{"type":"string","description":"Order Status","example":"approved","enum":["placed","approved","delivered"]},"complete":{"type":"boolean"}},"xml":{"name":"order"}}}}},"400":{"description":"Invalid ID supplied"},"404":{"description":"Order not found"}}}
    method: 'GET',
    url: '/store/order/:orderId',
    schema: {

      response: {
                          200 : {
  "application/xml": {
    "schema": {
      "type": "object",
      "properties": {
        "id": {
          "type": "integer",
          "format": "int64",
          "example": 10
        },
        "petId": {
          "type": "integer",
          "format": "int64",
          "example": 198772
        },
        "quantity": {
          "type": "integer",
          "format": "int32",
          "example": 7
        },
        "shipDate": {
          "type": "string",
          "format": "date-time"
        },
        "status": {
          "type": "string",
          "description": "Order Status",
          "example": "approved",
          "enum": [
            "placed",
            "approved",
            "delivered"
          ]
        },
        "complete": {
          "type": "boolean"
        }
      },
      "xml": {
        "name": "order"
      }
    }
  },
  "application/json": {
    "schema": {
      "type": "object",
      "properties": {
        "id": {
          "type": "integer",
          "format": "int64",
          "example": 10
        },
        "petId": {
          "type": "integer",
          "format": "int64",
          "example": 198772
        },
        "quantity": {
          "type": "integer",
          "format": "int32",
          "example": 7
        },
        "shipDate": {
          "type": "string",
          "format": "date-time"
        },
        "status": {
          "type": "string",
          "description": "Order Status",
          "example": "approved",
          "enum": [
            "placed",
            "approved",
            "delivered"
          ]
        },
        "complete": {
          "type": "boolean"
        }
      },
      "xml": {
        "name": "order"
      }
    }
  }
}                                                      }
    },
    handler: handler || function (request, reply) {
      reply.send('getOrderById not implemented')
    }
  })
}
export function deleteOrder(app: any, handler: (request, reply) => any) {
  app.route({
    // {"tags":["store"],"summary":"Delete purchase order by ID","description":"For valid response try integer IDs with value < 1000. Anything above 1000 or nonintegers will generate API errors","operationId":"deleteOrder","parameters":[{"name":"orderId","in":"path","description":"ID of the order that needs to be deleted","required":true,"schema":{"type":"integer","format":"int64"}}],"responses":{"400":{"description":"Invalid ID supplied"},"404":{"description":"Order not found"}}}
    method: 'DELETE',
    url: '/store/order/:orderId',
    schema: {

      response: {
                                              }
    },
    handler: handler || function (request, reply) {
      reply.send('deleteOrder not implemented')
    }
  })
}
export function createUser(app: any, handler: (request, reply) => any) {
  app.route({
    // {"tags":["user"],"summary":"Create user","description":"This can only be done by the logged in user.","operationId":"createUser","requestBody":{"description":"Created user object","content":{"application/json":{"schema":{"type":"object","properties":{"id":{"type":"integer","format":"int64","example":10},"username":{"type":"string","example":"theUser"},"firstName":{"type":"string","example":"John"},"lastName":{"type":"string","example":"James"},"email":{"type":"string","example":"john@email.com"},"password":{"type":"string","example":"12345"},"phone":{"type":"string","example":"12345"},"userStatus":{"type":"integer","description":"User Status","format":"int32","example":1}},"xml":{"name":"user"}}},"application/xml":{"schema":{"type":"object","properties":{"id":{"type":"integer","format":"int64","example":10},"username":{"type":"string","example":"theUser"},"firstName":{"type":"string","example":"John"},"lastName":{"type":"string","example":"James"},"email":{"type":"string","example":"john@email.com"},"password":{"type":"string","example":"12345"},"phone":{"type":"string","example":"12345"},"userStatus":{"type":"integer","description":"User Status","format":"int32","example":1}},"xml":{"name":"user"}}},"application/x-www-form-urlencoded":{"schema":{"type":"object","properties":{"id":{"type":"integer","format":"int64","example":10},"username":{"type":"string","example":"theUser"},"firstName":{"type":"string","example":"John"},"lastName":{"type":"string","example":"James"},"email":{"type":"string","example":"john@email.com"},"password":{"type":"string","example":"12345"},"phone":{"type":"string","example":"12345"},"userStatus":{"type":"integer","description":"User Status","format":"int32","example":1}},"xml":{"name":"user"}}}}},"responses":{"default":{"description":"successful operation","content":{"application/json":{"schema":{"type":"object","properties":{"id":{"type":"integer","format":"int64","example":10},"username":{"type":"string","example":"theUser"},"firstName":{"type":"string","example":"John"},"lastName":{"type":"string","example":"James"},"email":{"type":"string","example":"john@email.com"},"password":{"type":"string","example":"12345"},"phone":{"type":"string","example":"12345"},"userStatus":{"type":"integer","description":"User Status","format":"int32","example":1}},"xml":{"name":"user"}}},"application/xml":{"schema":{"type":"object","properties":{"id":{"type":"integer","format":"int64","example":10},"username":{"type":"string","example":"theUser"},"firstName":{"type":"string","example":"John"},"lastName":{"type":"string","example":"James"},"email":{"type":"string","example":"john@email.com"},"password":{"type":"string","example":"12345"},"phone":{"type":"string","example":"12345"},"userStatus":{"type":"integer","description":"User Status","format":"int32","example":1}},"xml":{"name":"user"}}}}}}}
    method: 'POST',
    url: '/user',
    schema: {

      response: {
                          default : {
  "application/json": {
    "schema": {
      "type": "object",
      "properties": {
        "id": {
          "type": "integer",
          "format": "int64",
          "example": 10
        },
        "username": {
          "type": "string",
          "example": "theUser"
        },
        "firstName": {
          "type": "string",
          "example": "John"
        },
        "lastName": {
          "type": "string",
          "example": "James"
        },
        "email": {
          "type": "string",
          "example": "john@email.com"
        },
        "password": {
          "type": "string",
          "example": "12345"
        },
        "phone": {
          "type": "string",
          "example": "12345"
        },
        "userStatus": {
          "type": "integer",
          "description": "User Status",
          "format": "int32",
          "example": 1
        }
      },
      "xml": {
        "name": "user"
      }
    }
  },
  "application/xml": {
    "schema": {
      "type": "object",
      "properties": {
        "id": {
          "type": "integer",
          "format": "int64",
          "example": 10
        },
        "username": {
          "type": "string",
          "example": "theUser"
        },
        "firstName": {
          "type": "string",
          "example": "John"
        },
        "lastName": {
          "type": "string",
          "example": "James"
        },
        "email": {
          "type": "string",
          "example": "john@email.com"
        },
        "password": {
          "type": "string",
          "example": "12345"
        },
        "phone": {
          "type": "string",
          "example": "12345"
        },
        "userStatus": {
          "type": "integer",
          "description": "User Status",
          "format": "int32",
          "example": 1
        }
      },
      "xml": {
        "name": "user"
      }
    }
  }
}                      }
    },
    handler: handler || function (request, reply) {
      reply.send('createUser not implemented')
    }
  })
}
export function createUsersWithListInput(app: any, handler: (request, reply) => any) {
  app.route({
    // {"tags":["user"],"summary":"Creates list of users with given input array","description":"Creates list of users with given input array","operationId":"createUsersWithListInput","requestBody":{"content":{"application/json":{"schema":{"type":"array","items":{"type":"object","properties":{"id":{"type":"integer","format":"int64","example":10},"username":{"type":"string","example":"theUser"},"firstName":{"type":"string","example":"John"},"lastName":{"type":"string","example":"James"},"email":{"type":"string","example":"john@email.com"},"password":{"type":"string","example":"12345"},"phone":{"type":"string","example":"12345"},"userStatus":{"type":"integer","description":"User Status","format":"int32","example":1}},"xml":{"name":"user"}}}}}},"responses":{"200":{"description":"Successful operation","content":{"application/xml":{"schema":{"type":"object","properties":{"id":{"type":"integer","format":"int64","example":10},"username":{"type":"string","example":"theUser"},"firstName":{"type":"string","example":"John"},"lastName":{"type":"string","example":"James"},"email":{"type":"string","example":"john@email.com"},"password":{"type":"string","example":"12345"},"phone":{"type":"string","example":"12345"},"userStatus":{"type":"integer","description":"User Status","format":"int32","example":1}},"xml":{"name":"user"}}},"application/json":{"schema":{"type":"object","properties":{"id":{"type":"integer","format":"int64","example":10},"username":{"type":"string","example":"theUser"},"firstName":{"type":"string","example":"John"},"lastName":{"type":"string","example":"James"},"email":{"type":"string","example":"john@email.com"},"password":{"type":"string","example":"12345"},"phone":{"type":"string","example":"12345"},"userStatus":{"type":"integer","description":"User Status","format":"int32","example":1}},"xml":{"name":"user"}}}}},"default":{"description":"successful operation"}}}
    method: 'POST',
    url: '/user/createWithList',
    schema: {

      response: {
                          200 : {
  "application/xml": {
    "schema": {
      "type": "object",
      "properties": {
        "id": {
          "type": "integer",
          "format": "int64",
          "example": 10
        },
        "username": {
          "type": "string",
          "example": "theUser"
        },
        "firstName": {
          "type": "string",
          "example": "John"
        },
        "lastName": {
          "type": "string",
          "example": "James"
        },
        "email": {
          "type": "string",
          "example": "john@email.com"
        },
        "password": {
          "type": "string",
          "example": "12345"
        },
        "phone": {
          "type": "string",
          "example": "12345"
        },
        "userStatus": {
          "type": "integer",
          "description": "User Status",
          "format": "int32",
          "example": 1
        }
      },
      "xml": {
        "name": "user"
      }
    }
  },
  "application/json": {
    "schema": {
      "type": "object",
      "properties": {
        "id": {
          "type": "integer",
          "format": "int64",
          "example": 10
        },
        "username": {
          "type": "string",
          "example": "theUser"
        },
        "firstName": {
          "type": "string",
          "example": "John"
        },
        "lastName": {
          "type": "string",
          "example": "James"
        },
        "email": {
          "type": "string",
          "example": "john@email.com"
        },
        "password": {
          "type": "string",
          "example": "12345"
        },
        "phone": {
          "type": "string",
          "example": "12345"
        },
        "userStatus": {
          "type": "integer",
          "description": "User Status",
          "format": "int32",
          "example": 1
        }
      },
      "xml": {
        "name": "user"
      }
    }
  }
}                                      }
    },
    handler: handler || function (request, reply) {
      reply.send('createUsersWithListInput not implemented')
    }
  })
}
export function loginUser(app: any, handler: (request, reply) => any) {
  app.route({
    // {"tags":["user"],"summary":"Logs user into the system","description":"","operationId":"loginUser","parameters":[{"name":"username","in":"query","description":"The user name for login","required":false,"schema":{"type":"string"}},{"name":"password","in":"query","description":"The password for login in clear text","required":false,"schema":{"type":"string"}}],"responses":{"200":{"description":"successful operation","headers":{"X-Rate-Limit":{"description":"calls per hour allowed by the user","schema":{"type":"integer","format":"int32"}},"X-Expires-After":{"description":"date in UTC when token expires","schema":{"type":"string","format":"date-time"}}},"content":{"application/xml":{"schema":{"type":"string"}},"application/json":{"schema":{"type":"string"}}}},"400":{"description":"Invalid username/password supplied"}}}
    method: 'GET',
    url: '/user/login',
    schema: {

      response: {
                          200 : {
  "application/xml": {
    "schema": {
      "type": "string"
    }
  },
  "application/json": {
    "schema": {
      "type": "string"
    }
  }
}                                      }
    },
    handler: handler || function (request, reply) {
      reply.send('loginUser not implemented')
    }
  })
}
export function logoutUser(app: any, handler: (request, reply) => any) {
  app.route({
    // {"tags":["user"],"summary":"Logs out current logged in user session","description":"","operationId":"logoutUser","parameters":[],"responses":{"default":{"description":"successful operation"}}}
    method: 'GET',
    url: '/user/logout',
    schema: {

      response: {
                              }
    },
    handler: handler || function (request, reply) {
      reply.send('logoutUser not implemented')
    }
  })
}
export function getUserByName(app: any, handler: (request, reply) => any) {
  app.route({
    // {"tags":["user"],"summary":"Get user by user name","description":"","operationId":"getUserByName","parameters":[{"name":"username","in":"path","description":"The name that needs to be fetched. Use user1 for testing. ","required":true,"schema":{"type":"string"}}],"responses":{"200":{"description":"successful operation","content":{"application/xml":{"schema":{"type":"object","properties":{"id":{"type":"integer","format":"int64","example":10},"username":{"type":"string","example":"theUser"},"firstName":{"type":"string","example":"John"},"lastName":{"type":"string","example":"James"},"email":{"type":"string","example":"john@email.com"},"password":{"type":"string","example":"12345"},"phone":{"type":"string","example":"12345"},"userStatus":{"type":"integer","description":"User Status","format":"int32","example":1}},"xml":{"name":"user"}}},"application/json":{"schema":{"type":"object","properties":{"id":{"type":"integer","format":"int64","example":10},"username":{"type":"string","example":"theUser"},"firstName":{"type":"string","example":"John"},"lastName":{"type":"string","example":"James"},"email":{"type":"string","example":"john@email.com"},"password":{"type":"string","example":"12345"},"phone":{"type":"string","example":"12345"},"userStatus":{"type":"integer","description":"User Status","format":"int32","example":1}},"xml":{"name":"user"}}}}},"400":{"description":"Invalid username supplied"},"404":{"description":"User not found"}}}
    method: 'GET',
    url: '/user/:username',
    schema: {

      response: {
                          200 : {
  "application/xml": {
    "schema": {
      "type": "object",
      "properties": {
        "id": {
          "type": "integer",
          "format": "int64",
          "example": 10
        },
        "username": {
          "type": "string",
          "example": "theUser"
        },
        "firstName": {
          "type": "string",
          "example": "John"
        },
        "lastName": {
          "type": "string",
          "example": "James"
        },
        "email": {
          "type": "string",
          "example": "john@email.com"
        },
        "password": {
          "type": "string",
          "example": "12345"
        },
        "phone": {
          "type": "string",
          "example": "12345"
        },
        "userStatus": {
          "type": "integer",
          "description": "User Status",
          "format": "int32",
          "example": 1
        }
      },
      "xml": {
        "name": "user"
      }
    }
  },
  "application/json": {
    "schema": {
      "type": "object",
      "properties": {
        "id": {
          "type": "integer",
          "format": "int64",
          "example": 10
        },
        "username": {
          "type": "string",
          "example": "theUser"
        },
        "firstName": {
          "type": "string",
          "example": "John"
        },
        "lastName": {
          "type": "string",
          "example": "James"
        },
        "email": {
          "type": "string",
          "example": "john@email.com"
        },
        "password": {
          "type": "string",
          "example": "12345"
        },
        "phone": {
          "type": "string",
          "example": "12345"
        },
        "userStatus": {
          "type": "integer",
          "description": "User Status",
          "format": "int32",
          "example": 1
        }
      },
      "xml": {
        "name": "user"
      }
    }
  }
}                                                      }
    },
    handler: handler || function (request, reply) {
      reply.send('getUserByName not implemented')
    }
  })
}
export function updateUser(app: any, handler: (request, reply) => any) {
  app.route({
    // {"tags":["user"],"summary":"Update user","description":"This can only be done by the logged in user.","operationId":"updateUser","parameters":[{"name":"username","in":"path","description":"name that need to be deleted","required":true,"schema":{"type":"string"}}],"requestBody":{"description":"Update an existent user in the store","content":{"application/json":{"schema":{"type":"object","properties":{"id":{"type":"integer","format":"int64","example":10},"username":{"type":"string","example":"theUser"},"firstName":{"type":"string","example":"John"},"lastName":{"type":"string","example":"James"},"email":{"type":"string","example":"john@email.com"},"password":{"type":"string","example":"12345"},"phone":{"type":"string","example":"12345"},"userStatus":{"type":"integer","description":"User Status","format":"int32","example":1}},"xml":{"name":"user"}}},"application/xml":{"schema":{"type":"object","properties":{"id":{"type":"integer","format":"int64","example":10},"username":{"type":"string","example":"theUser"},"firstName":{"type":"string","example":"John"},"lastName":{"type":"string","example":"James"},"email":{"type":"string","example":"john@email.com"},"password":{"type":"string","example":"12345"},"phone":{"type":"string","example":"12345"},"userStatus":{"type":"integer","description":"User Status","format":"int32","example":1}},"xml":{"name":"user"}}},"application/x-www-form-urlencoded":{"schema":{"type":"object","properties":{"id":{"type":"integer","format":"int64","example":10},"username":{"type":"string","example":"theUser"},"firstName":{"type":"string","example":"John"},"lastName":{"type":"string","example":"James"},"email":{"type":"string","example":"john@email.com"},"password":{"type":"string","example":"12345"},"phone":{"type":"string","example":"12345"},"userStatus":{"type":"integer","description":"User Status","format":"int32","example":1}},"xml":{"name":"user"}}}}},"responses":{"default":{"description":"successful operation"}}}
    method: 'PUT',
    url: '/user/:username',
    schema: {

      response: {
                              }
    },
    handler: handler || function (request, reply) {
      reply.send('updateUser not implemented')
    }
  })
}
export function deleteUser(app: any, handler: (request, reply) => any) {
  app.route({
    // {"tags":["user"],"summary":"Delete user","description":"This can only be done by the logged in user.","operationId":"deleteUser","parameters":[{"name":"username","in":"path","description":"The name that needs to be deleted","required":true,"schema":{"type":"string"}}],"responses":{"400":{"description":"Invalid username supplied"},"404":{"description":"User not found"}}}
    method: 'DELETE',
    url: '/user/:username',
    schema: {

      response: {
                                              }
    },
    handler: handler || function (request, reply) {
      reply.send('deleteUser not implemented')
    }
  })
}
