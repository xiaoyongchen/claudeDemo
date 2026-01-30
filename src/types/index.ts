export interface Company {
  id: string
  name: string
  serialNumber: string
}

export interface ReportForm {
  taskName: string
  companyName: string
  reportNumber: string
  compileDate: string
  examDateRange: string
  compileOrganization: string
}

export type TabKey = 'cover' | 'preface' | 'summary' | 'personnel' | 'completion' | 'analysis' | 'advice' | 'conclusion'

export interface Tab {
  key: TabKey
  label: string
}
