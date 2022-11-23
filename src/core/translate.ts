import Module from "./module";


export interface TranslateConfig {
  incremental: boolean,
  mainLocaleModule: Module,
  localeModules: Module[]
}

export interface TranslatedModule {
  name: string,
  deps: Array<{
    name: string
    messages: Record<string, string>
  }>
}

export interface TranslatedOutput {
  translatedModules: TranslatedModule[]
}

export function translate(config:TranslateConfig): TranslatedOutput{

}
