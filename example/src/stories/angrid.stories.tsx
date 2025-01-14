import { faker } from '@faker-js/faker'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Angrid } from 'react-angrid-ts'

export default {
    title: 'react-Angrid-ts',
    component: Angrid,
    argTypes: {
        theme: {
            control: {
                type: 'inline-radio',
                options: ['light', 'dark'],
                default: 'light',
            },
        },
    },

    parameters: { actions: { argTypesRegex: '^on.*' } },
} as ComponentMeta<typeof Angrid>

const columns = [
    {
        field: 'userId',
        headerName: 'User Id',
        description: 'user id that is unique',

        sortable: true,
    },
    {
        field: 'fullName',
        headerName: 'Fullname',
        description: 'full name of user',

        sortable: true,
    },
    {
        field: 'age',
        headerName: 'Age',
        description: 'age of user',
        sortable: true,
    },
    {
        field: 'delete',
        headerName: 'delete(component cell)',
        description: 'delete user',
        render: () => {
            return <button>delete</button>
        },
    },
]

const data = [
    {
        userId: faker.unique(faker.datatype.number),
        fullName: faker.name.findName(),
        age: faker.datatype.number(100),
    },
    {
        userId: faker.unique(faker.datatype.number),
        fullName: faker.name.findName(),
        age: faker.datatype.number(100),
    },
    {
        userId: faker.unique(faker.datatype.number),
        fullName: faker.name.findName(),
        age: faker.datatype.number(100),
    },
    {
        userId: faker.unique(faker.datatype.number),
        fullName: faker.name.findName(),
        age: faker.datatype.number(100),
    },
    {
        userId: faker.unique(faker.datatype.number),
        fullName: faker.name.findName(),
        age: faker.datatype.number(100),
    },
    {
        userId: faker.unique(faker.datatype.number),
        fullName: faker.name.findName(),
        age: faker.datatype.number(100),
    },
    {
        userId: faker.unique(faker.datatype.number),
        fullName: faker.name.findName(),
        age: faker.datatype.number(100),
    },
    {
        userId: faker.unique(faker.datatype.number),
        fullName: faker.name.findName(),
        age: faker.datatype.number(100),
    },
    {
        userId: faker.unique(faker.datatype.number),
        fullName: faker.name.findName(),
        age: faker.datatype.number(100),
    },
    {
        userId: faker.unique(faker.datatype.number),
        fullName: faker.name.findName(),
        age: faker.datatype.number(100),
    },
    {
        userId: faker.unique(faker.datatype.number),
        fullName: faker.name.findName(),
        age: faker.datatype.number(100),
    },
]

const Template: ComponentStory<typeof Angrid> = (arguments_) => {
    return (
        <div dir={arguments_.rtl ? 'rtl' : 'ltr'}>
            <Angrid {...arguments_} />
        </div>
    )
}

export const Default = Template.bind({})

Default.args = {
    rows: data,
    columns,
    rtl: false,
    resetPage: false,
    rowHeight: 40,
    columnNumberTitle: 'number',
    loading: false,
    totalCount: 11,
    pageSize: 5,
    showTotalRecord: true,
    showRowNumber: true,
    showNumberOfPage: true,
    showPageRange: true,
    showPageSelect: true,
    showPageNumber: true,
    showPageArrow: true,
    showCurrentPage: true,
    textCurrent: 'Current Page',
    textTotal: 'all rows',
    textNumber: 'Page Count',
    textEmpty: 'No Data',
    textPage: 'Page',
    bordered: false,
    internalPaginate: true,
    onPageChange: ({ page, changedPageRange }) =>
        console.log(page, changedPageRange),
}
