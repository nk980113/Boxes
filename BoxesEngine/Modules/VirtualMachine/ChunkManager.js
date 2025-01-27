// Chunk manager
export default class {
  #TaskManager

  #chunks = {}

  constructor (TaskManager) {
    this.#TaskManager = TaskManager
  }

  get chunks () {return this.#chunks}

  // Clear chunks
  clear () {
    this.#chunks = {}
  }
 
  // Add chunk
  addChunk (parentChunk, callLocation, environment, actions, async) {
    let callPath

    if (parentChunk === undefined) callPath = []
    else {
      if (callLocation === undefined) callPath = parentChunk.callPath
      else callPath = parentChunk.callPath.concat([callLocation]).slice(0, 10)
    }

    let id = generateID(5, Object.keys(this.#chunks))

    this.#chunks[id] = {
      id,
      state: 'running',
      
      async,
      input: (environment.input === undefined) ? { type: 'list', value: [] } : environment.input,
      actions,

      currentAction: 0,
      currentFragment: 0,
      properties: [],
      result: (environment.result === undefined) ? { type: 'empty', value: 'Empty' } : environment.result,
      returnedResult: undefined,
      executeData: undefined,

      parentChunk: (parentChunk === undefined) ? undefined : parentChunk.id,
      callPath
    }

    if (async) {
      if (parentChunk !== undefined) parentChunk.returnedResult = { type: 'promise', value: '' }
    } else {
      if (parentChunk !== undefined) parentChunk.state = 'waiting'
    }

    this.#TaskManager.addTask(id)

    return id
  }

  // Remove chunk
  removeChunk (id) {
    delete this.chunks[id]

    this.#TaskManager.removeTask(id)
  }
}

import generateID from '../Tools/GenerateID.js'
