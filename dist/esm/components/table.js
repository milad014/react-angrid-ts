var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
/* eslint-disable @typescript-eslint/no-unsafe-return */
import { memo, useCallback, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { BiSortDown, BiSortUp } from './icons';
import { IsEmpty } from './is-empty';
import { Loading } from './loading';
export var Main = function (_a) {
    var showRowNumber = _a.showRowNumber, columnNumberTitle = _a.columnNumberTitle, columns = _a.columns, rows = _a.rows, empty = _a.empty, textEmpty = _a.textEmpty, loading = _a.loading, className = _a.className, rtl = _a.rtl, _b = _a.pageSize, pageSize = _b === void 0 ? 5 : _b, rowHeight = _a.rowHeight, currentPage = _a.currentPage, sortable = _a.sortable;
    var _c = useState(false), isSort = _c[0], setIsSort = _c[1];
    var _d = useState(''), isSortField = _d[0], setIsSortField = _d[1];
    var handleSort = useCallback(function (value) {
        setIsSort(!isSort);
        setIsSortField(value);
        sortable(value, isSort);
    }, [isSort, sortable]);
    return (_jsxs("div", __assign({ className: className }, { children: [loading && _jsx(Loading, {}), _jsx("table", __assign({ style: { width: '100%' } }, { children: !loading && (_jsxs(_Fragment, { children: [_jsx("thead", { children: _jsxs("tr", { children: [showRowNumber && (_jsx("th", __assign({ style: { width: 25 } }, { children: columnNumberTitle }))), columns === null || columns === void 0 ? void 0 : columns.map(function (column) { return (_jsxs("th", __assign({ className: column.sortable ? 'sort' : '', title: column.description, style: {
                                            width: column.width,
                                        } }, { children: [_jsx("span", { children: column.headerName }), column.sortable && (_jsx("button", __assign({ type: 'button', className: rtl ? 'rtl' : 'ltr', onClick: function () {
                                                    return handleSort(column.field);
                                                } }, { children: isSort &&
                                                    isSortField === column.field ? (_jsx(BiSortDown, {})) : (_jsx(BiSortUp, {})) })))] }), uuidv4())); })] }) }), _jsxs("tbody", __assign({ className: 'tbody' }, { children: [!empty &&
                                    (rows === null || rows === void 0 ? void 0 : rows.map(function (row) { return (_jsxs("tr", __assign({ style: { height: rowHeight } }, { children: [showRowNumber && (_jsx("td", { children: rows.indexOf(row) +
                                                    1 +
                                                    pageSize *
                                                        (currentPage - 1) })), columns === null || columns === void 0 ? void 0 : columns.map(function (c) { return (_jsx("td", { children: c.render
                                                    ? c.render(row)
                                                    : row[c.field] }, uuidv4())); })] }), uuidv4())); })), empty && (_jsx("tr", { children: _jsx("td", { children: empty && (_jsx(IsEmpty, { textEmpty: textEmpty })) }) }))] }))] })) }))] })));
};
export var Table = memo(Main);
