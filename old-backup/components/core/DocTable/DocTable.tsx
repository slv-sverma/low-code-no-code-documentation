import classNames from "classnames";
import React, { ReactNode } from "react";

type DocTableType = {
  children: ReactNode;
  className?: string;
};

export const TableRow = ({ children }: DocTableType) => {
  return (
    <div
      className={classNames(
        "table-row border even:bg-gray-50 odd:bg-white",
        classNames
      )}
    >
      {children}
    </div>
  );
};
export const TableCell = ({ children }: DocTableType) => {
  return (
    <div
      className={classNames(
        "table-cell border px-2 py-1 border-slate-100",
        classNames
      )}
    >
      {children}
    </div>
  );
};

export const TableHeaderCell = ({ children }: DocTableType) => {
  return (
    <div
      className={classNames(
        "table-cell  px-2 py-1 font-[600]  text-indigo-300 border border-slate-100",
        classNames
      )}
    >
      {children}
    </div>
  );
};
export const DocTable = ({ children }: DocTableType) => {
  return (
    <div className={classNames("table border border-slate-100", classNames)}>
      {children}
    </div>
  );
};

DocTable.TableRow = TableRow;
DocTable.TableCell = TableCell;
DocTable.TableHeaderCell = TableHeaderCell;
