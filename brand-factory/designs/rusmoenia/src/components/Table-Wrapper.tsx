import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import type { DataTable } from "types/data-table";
import SVGMask from "../../../../globals/components/svg-mask";
import type { ComponentProps } from "../../../../globals/types/component-props";
import { showcase } from "../../../../globals/features/showcase/text";
import { Features } from "../../../../globals/types/enums";

interface Props {
  componentProps: ComponentProps;
  table: DataTable;
}

export const TableWrapper = ({ table, componentProps }: Props) => {
  // TODO: data table maybe?!?
  // const isDesktop = useMediaQuery("(min-width: 1024px)");

  // if (!isDesktop)
  //   return (
  //     <>
  //       <Table className="border">
  //         <TableBody>
  //           <TableRow>
  //             <TableCell colSpan={2} className="text-center font-bold">
  //               Dubai Index Assets
  //             </TableCell>
  //           </TableRow>
  //           <TableRow>
  //             <TableCell>FXORO Global</TableCell>
  //             <TableCell>
  //               <Icon state={true} /> Available
  //             </TableCell>
  //           </TableRow>
  //           <TableRow>
  //             <TableCell>Typical Broker Experience</TableCell>
  //             <TableCell>
  //               <Icon state={false} />
  //               Not Offered
  //             </TableCell>
  //           </TableRow>

  //           <TableRow>
  //             <TableCell colSpan={2}>Dubai Index Assets</TableCell>
  //           </TableRow>
  //           <TableRow>
  //             <TableCell>FXORO Global</TableCell>
  //             <TableCell>Available</TableCell>
  //           </TableRow>
  //           <TableRow>
  //             <TableCell>Typical Broker Experience</TableCell>
  //             <TableCell>Not Offered</TableCell>
  //           </TableRow>
  //         </TableBody>
  //       </Table>
  //     </>
  //   );

  return (
    <>
      <Table className="text-custom-size border">
        <TableHeader>
          <TableRow>
            {table.titles.map((title, index) => {
              return (
                <TableHead
                  key={title[componentProps.lang].replaceAll(" ", "-")}
                  className={"bg-primary text-primary-foreground"}
                >
                  {componentProps.features?.includes(Features.showcase)
                    ? showcase({
                        words: 2,
                      })
                    : title[componentProps.lang]}
                </TableHead>
              );
            })}
          </TableRow>
        </TableHeader>
        <TableBody>
          {table.data.map((row, index) => {
            return (
              <TableRow key={index}>
                <TableCell>
                  {componentProps.features?.includes(Features.showcase)
                    ? showcase({
                        words: 2,
                      })
                    : row.advantage[componentProps.lang]}
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Icon state={row.fxoro_global.isAvailable} />
                    {componentProps.features?.includes(Features.showcase)
                      ? showcase({
                          words: 2,
                        })
                      : row.fxoro_global.label[componentProps.lang]}
                  </div>
                </TableCell>

                <TableCell>
                  <div className="flex items-center gap-2">
                    <Icon state={row.typical_broker_exp.isAvailable} />
                    {componentProps.features?.includes(Features.showcase)
                      ? showcase({
                          words: 2,
                        })
                      : row.typical_broker_exp.label[componentProps.lang]}
                  </div>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </>
  );
};

function Icon({ state }: { state: boolean | undefined }) {
  return (
    <>
      {state === undefined && (
        <div className="flex items-center gap-1 text-xl">
          <div className="w-fit text-green-500">
            <SVGMask
              url={`url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 24 24'%3E%3C!-- Icon from Material Symbols by Google - https://github.com/google/material-design-icons/blob/master/LICENSE --%3E%3Cpath fill='currentColor' d='m10.6 16.6l7.05-7.05l-1.4-1.4l-5.65 5.65l-2.85-2.85l-1.4 1.4zM12 22q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22'/%3E%3C/svg%3E")`}
            />
          </div>
          /
          <div className="text-destructive w-fit">
            <SVGMask
              url={`url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 24 24'%3E%3C!-- Icon from Material Symbols by Google - https://github.com/google/material-design-icons/blob/master/LICENSE --%3E%3Cpath fill='currentColor' d='m8.4 17l3.6-3.6l3.6 3.6l1.4-1.4l-3.6-3.6L17 8.4L15.6 7L12 10.6L8.4 7L7 8.4l3.6 3.6L7 15.6zm3.6 5q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22'/%3E%3C/svg%3E")`}
            />
          </div>
        </div>
      )}
      {state === true && (
        <div className="w-fit text-xl text-green-500">
          <SVGMask
            url={`url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 24 24'%3E%3C!-- Icon from Material Symbols by Google - https://github.com/google/material-design-icons/blob/master/LICENSE --%3E%3Cpath fill='currentColor' d='m10.6 16.6l7.05-7.05l-1.4-1.4l-5.65 5.65l-2.85-2.85l-1.4 1.4zM12 22q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22'/%3E%3C/svg%3E")`}
          />
        </div>
      )}
      {state === false && (
        <div className="text-destructive w-fit text-xl">
          <SVGMask
            url={`url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 24 24'%3E%3C!-- Icon from Material Symbols by Google - https://github.com/google/material-design-icons/blob/master/LICENSE --%3E%3Cpath fill='currentColor' d='m8.4 17l3.6-3.6l3.6 3.6l1.4-1.4l-3.6-3.6L17 8.4L15.6 7L12 10.6L8.4 7L7 8.4l3.6 3.6L7 15.6zm3.6 5q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22'/%3E%3C/svg%3E")`}
          />
        </div>
      )}
    </>
  );
}
