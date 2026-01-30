import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { Company, ReportForm, TabKey } from '@/types'

export const useReportStore = defineStore('report', () => {
  // 当前选中的公司
  const selectedCompanyId = ref<string | null>('1')

  // 当前选中的标签页
  const activeTab = ref<TabKey>('cover')

  // 搜索关键词
  const searchKeyword = ref('')

  // 时间筛选
  const dateFilter = ref('')

  // 状态筛选
  const statusFilter = ref('all')

  // 发起人筛选
  const initiatorFilter = ref('')

  // 公司列表
  const companies = ref<Company[]>([
    { id: '1', name: '北京中航有限责任公司', serialNumber: '857392' },
    { id: '2', name: '天津渤海航空物流有限公司', serialNumber: '2934' },
    { id: '3', name: '郑州中原航空港发展有限公司', serialNumber: '2934' },
    { id: '4', name: '重庆西部航空产业有限公司', serialNumber: '2934' },
    { id: '5', name: '成都西南航空技术有限公司', serialNumber: '2934' },
    { id: '6', name: '深圳航空国际旅行社有限公司', serialNumber: '2934' },
    { id: '7', name: '广州南方航空发展有限公司', serialNumber: '2934' },
  ])

  // 表单数据
  const reportForm = ref<ReportForm>({
    taskName: '2025年度XX市供电局职工健康体检',
    companyName: 'XX市供电局',
    reportNumber: 'TJ-2025-001',
    compileDate: '2025/12/01',
    examDateRange: '2025年11月11日-2025年11月15日',
    compileOrganization: '温州医科大学附属第一医院体检中心温州医科大学附属第一医院体检中心温州医科大学附属第一医院体检中心温州医科大学附属第一医院体检中心温州医科大学附属第一医院体检中心温州医科大学附属第一医院体检中心',
  })

  // 最后更新时间
  const lastUpdateTime = ref('2025.12.30')

  // 筛选后的公司列表
  const filteredCompanies = computed(() => {
    if (!searchKeyword.value) return companies.value
    return companies.value.filter(c =>
      c.name.includes(searchKeyword.value) ||
      c.serialNumber.includes(searchKeyword.value)
    )
  })

  // 选中的公司
  const selectedCompany = computed(() =>
    companies.value.find(c => c.id === selectedCompanyId.value)
  )

  // 选择公司
  function selectCompany(id: string) {
    selectedCompanyId.value = id
  }

  // 切换标签页
  function setActiveTab(tab: TabKey) {
    activeTab.value = tab
  }

  // 更新表单
  function updateForm(field: keyof ReportForm, value: string) {
    reportForm.value[field] = value
  }

  return {
    selectedCompanyId,
    activeTab,
    searchKeyword,
    dateFilter,
    statusFilter,
    initiatorFilter,
    companies,
    reportForm,
    lastUpdateTime,
    filteredCompanies,
    selectedCompany,
    selectCompany,
    setActiveTab,
    updateForm,
  }
})
