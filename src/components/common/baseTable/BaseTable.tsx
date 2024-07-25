// Libs
import classNames from 'classnames/bind';
import { useTranslation } from 'react-i18next';
// Components, Layouts, Pages
// Others
// import { DEFAULT_NUMBER_ZERO } from '~/utils/constants/common';
import { BaseTableEnum } from '~/utils/enum';
import { ColumnTableType, IDataTable } from '~/utils/interface/common';
// Styles, images, icons
import styles from './BaseTable.module.scss';

type Props<T> = {
  columns: ColumnTableType<T>[];
  dataSource: T[];
  typeStyle?: BaseTableEnum;
  onClickRow?: (id: string) => void;
};

const cx = classNames.bind(styles);

const BaseTable = <T extends IDataTable>(props: Props<T>) => {
  //#region Destructuring Props
  const { dataSource = [], columns, typeStyle, onClickRow } = props;
  //#endregion Destructuring Props

  //#region Declare Hook
  const { t } = useTranslation();
  //#endregion Declare Hook

  //#region Selector
  //#endregion Selector

  //#region Declare State
  //#endregion Declare State

  //#region Implement Hook
  //#endregion Implement Hook

  //#region Handle Function
  const handleClickRow = (id: string) => {
    onClickRow && onClickRow(id);
  };
  //#endregion Handle Function

  return (
    <div id='baseTableComponent' className={cx('baseTableComponent', typeStyle)}>
      <table className={cx('tableContainer', typeStyle)}>
        <thead className={cx('thead', typeStyle)}>
          <tr>
            {columns.map((column) => (
              <th
                className={cx('colTable', typeStyle)}
                key={column.key}
                style={{ cursor: !!onClickRow ? 'pointer' : 'auto' }}
              >
                {column.title && column.title}
              </th>
            ))}
          </tr>
        </thead>

        <tbody className={cx('tbody', typeStyle)}>
          {dataSource.length > 0 ? (
            dataSource.map((data, rowIndex: number) => (
              <tr key={rowIndex} onClick={() => handleClickRow(data['_id'])}>
                {columns.map((column) => (
                  <td
                    key={column.key}
                    style={{
                      maxWidth: column.width,
                      width: column.width,
                      cursor: !!onClickRow ? 'pointer' : 'auto',
                    }}
                    className={cx('colTableBody', typeStyle)}
                  >
                    <div className={cx('cellContainer')}>
                      {column.render
                        ? column.render(data[column.dataIndex!], data, rowIndex)
                        : (data[column.dataIndex!] as React.ReactNode)}
                    </div>
                  </td>
                ))}
              </tr>
            ))
          ) : (
            <tr>
              <td className={cx('noDataAvailable')}>{t('No data available!')}</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};
export default BaseTable;
