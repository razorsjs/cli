export interface ICommandOption {
  optionName: string,
  optionDescription?: string
  defaultOption?: any
}

export interface ICommand {
  name: string
  description?: string
  options?: Array<ICommandOption>
}
