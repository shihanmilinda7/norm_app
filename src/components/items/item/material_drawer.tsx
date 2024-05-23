import SearchableTable from "@/components/searchable-table/searchable-table";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { useEffect, useState } from "react";
import { getMaterialItems } from "./item_actions";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Badge } from "@/components/ui/badge";
import { FcAddRow } from "react-icons/fc";

const MaterialDrawer = () => {
  const [materialItems, setMaterialItems] = useState<any[]>([]);
  const [searchTerms, setSearchTerms] = useState<any>();

  const materialItemTableHeaders = [
    { columnName: "itemCode", headerName: "Item Code", width: "120" },
    { columnName: "itemName", headerName: "Item Name", width: "200" },
    { columnName: "unit", headerName: "Unit", width: "100" },
  ];

  useEffect(() => {
    fetchMaterialItems(searchTerms);
  }, [searchTerms]);

  const fetchMaterialItems = async (terms: any) => {
    const result: any = await getMaterialItems(terms);
    setMaterialItems(result.data);
  };

  return (
    <div className="">
      <Drawer>
        <DrawerTrigger>
          <Badge className="">
            <FcAddRow className="h-8 w-8" />
          </Badge>
          {/* <TooltipProvider>
            <Tooltip>
              <TooltipTrigger
              type="button"
              // onClick={() =>
              //   append({
              //     normMaterialDetailId: 0,
              //     normId: 0,
              //   })
              // }
              >
                <Badge className="">
                  <FcAddRow className="h-8 w-8" />
                </Badge>
              </TooltipTrigger>
              <TooltipContent>
                <p>Add materials</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider> */}
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Are you absolutely sure?</DrawerTitle>
            <DrawerDescription>This action cannot be undone.</DrawerDescription>
          </DrawerHeader>
          <div className="max-h-[50vh] overflow-y-auto">
            <SearchableTable
              headers={materialItemTableHeaders}
              rowDataIn={materialItems}
              setSearchTermsIn={setSearchTerms}
            />
          </div>
          <DrawerFooter>
            <Button type="button" className="">
              Add to list
            </Button>
            <DrawerClose>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default MaterialDrawer;
