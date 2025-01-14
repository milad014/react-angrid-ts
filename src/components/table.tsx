/* eslint-disable @typescript-eslint/no-unsafe-return */
import { memo, useCallback, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import type { PropsTypes } from './an-grid'
import { BiSortDown, BiSortUp } from './icons'
import { IsEmpty } from './is-empty'
import { Loading } from './loading'

type Props = Partial<PropsTypes> & {
    empty: boolean
    loading: boolean
    currentPage: number
    sortable: (value: string, sort: boolean) => void
}

export const Main = ({
    showRowNumber,
    columnNumberTitle,
    columns,
    rows,
    empty,
    textEmpty,
    loading,
    className,
    rtl,
    pageSize = 5,
    rowHeight,
    currentPage,
    sortable,
}: Props): JSX.Element => {
    const [isSort, setIsSort] = useState<boolean>(false)
    const [isSortField, setIsSortField] = useState<string>('')

    const handleSort = useCallback(
        (value: string): void => {
            setIsSort(!isSort)
            setIsSortField(value)
            sortable(value, isSort)
        },
        [isSort, sortable]
    )

    return (
        <div className={className}>
            {loading && <Loading />}
            <table style={{ width: '100%' }}>
                {!loading && (
                    <>
                        <thead>
                            <tr>
                                {showRowNumber && (
                                    <th style={{ width: 25 }}>
                                        {columnNumberTitle}
                                    </th>
                                )}
                                {columns?.map((column) => (
                                    <th
                                        className={
                                            column.sortable ? 'sort' : ''
                                        }
                                        key={uuidv4()}
                                        title={column.description}
                                        style={{
                                            width: column.width,
                                        }}
                                    >
                                        <span>{column.headerName}</span>
                                        {column.sortable && (
                                            <button
                                                type='button'
                                                className={rtl ? 'rtl' : 'ltr'}
                                                onClick={(): void =>
                                                    handleSort(column.field)
                                                }
                                            >
                                                {isSort &&
                                                isSortField === column.field ? (
                                                    <BiSortDown />
                                                ) : (
                                                    <BiSortUp />
                                                )}
                                            </button>
                                        )}
                                    </th>
                                ))}
                            </tr>
                        </thead>

                        <tbody className='tbody'>
                            {!empty &&
                                rows?.map((row) => (
                                    <tr
                                        key={uuidv4()}
                                        style={{ height: rowHeight }}
                                    >
                                        {showRowNumber && (
                                            <td>
                                                {rows.indexOf(row) +
                                                    1 +
                                                    pageSize *
                                                        (currentPage - 1)}
                                            </td>
                                        )}
                                        {columns?.map((c) => (
                                            <td key={uuidv4()}>
                                                {c.render
                                                    ? c.render(row)
                                                    : row[c.field]}
                                            </td>
                                        ))}
                                    </tr>
                                ))}
                            {empty && (
                                <tr>
                                    <td>
                                        {empty && (
                                            <IsEmpty textEmpty={textEmpty} />
                                        )}
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </>
                )}
            </table>
        </div>
    )
}

export const Table = memo(Main)
