export interface IMatched {
  path: Array<ILayer>,
  pathAndMethod: Array<any>,
  route: boolean,
}

export interface ILayer {
  match(path: string): any
  methods: Array<string>
}
