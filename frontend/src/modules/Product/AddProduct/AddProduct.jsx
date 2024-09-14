import Sidebar from "@/modules/Product/AddProduct/Sidebar.jsx";
import AdminLayout from "@/components/adminLayout/AdminLayout.jsx";
import { useCallback, useState } from "react";
import { CiEdit } from "react-icons/ci";
import { Button } from "@/components/ui/button.jsx";
import { Input } from "@/components/ui/input.jsx";
import { FaPlusCircle } from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Separator } from "@/components/ui/separator.jsx";
import { Textarea } from "@/components/ui/textarea.jsx";

const AddProduct = () => {
  const [formData, setFormData] = useState({});
  const [addProductTitle, setAddProductTitle] = useState(false);
  const [addDescription, setAddDescription] = useState(false);
  const [addPrice, setAddPrice] = useState(false);
  const [addMeasurement, setAddMeasurement] = useState(false);
  const [addColor, setAddColor] = useState(false);
  const [additionalInfo, setAdditionalInfo] = useState(false);

  const handleFormData = useCallback((name, data) => {
    setFormData((formData) => ({ ...formData, [name]: data.target.value }));
  }, []);

  console.log(formData);

  return (
    <div className="font-inter">
      <AdminLayout />
      <div className="flex">
        <Sidebar className="w-1/5 max-w-[240px]" />
        <div className="w-[80%]">
          <h1 className="w-full text-left text-[32px] font-semibold bg-[#F5F6FA] py-1 px-8">
            Add Product
          </h1>
          <div className="px-8 mt-8 flex">
            <div className="w-1/5 items-start">Images Upload</div>
            <div className="w-[80%] flex flex-col gap-4">
              <div className="flex gap-2 items-center">
                <h2 className="text-[28px] font-medium py-2">
                  Add Product Title
                </h2>
                <Button
                  variant="ghost"
                  onClick={() => setAddProductTitle(!addProductTitle)}
                >
                  <CiEdit size={30} />
                </Button>
              </div>
              {addProductTitle && (
                <Input
                  size="lg"
                  placeholder="Product Title..."
                  onChange={(e) => handleFormData("title", e)}
                />
              )}

              <div className="flex gap-2 flex-col">
                <div className="flex gap-2 items-center">
                  <h2 className="text-left text-slate-400 text-[16px] font-normal py-2">
                    Add Description
                  </h2>
                  <Button
                    variant="ghost"
                    onClick={() => setAddDescription(!addDescription)}
                  >
                    <CiEdit size={26} />
                  </Button>
                </div>
                {addDescription && (
                  <Input
                    size="lg"
                    placeholder="Product Description..."
                    onChange={(e) => handleFormData("description", e)}
                  />
                )}
              </div>

              <div className="flex gap-2 flex-col mt-2">
                <div className="flex gap-8">
                  <Button
                    variant="ghost"
                    className="text-[28px] font-semibold py-2 w-fit flex gap-2 px-0 hover:bg-transparent"
                    onClick={() => setAddPrice(!addPrice)}
                  >
                    <FaPlusCircle />
                    Add Price
                  </Button>
                  <Button
                    variant="ghost"
                    className="text-[28px] font-medium py-2 w-fit flex gap-2 px-0 hover:bg-transparent"
                    onClick={() => setAddPrice(!addPrice)}
                  >
                    <FaPlusCircle />
                    Add MRP or Price Before Discount
                  </Button>
                </div>
                {addPrice && (
                  <Input
                    size="lg"
                    type="number"
                    placeholder="Product Price $24.99..."
                    onChange={(e) => handleFormData("price", e)}
                  />
                )}
              </div>
              <Separator />
              <div className="flex gap-2 flex-col">
                <div className="flex gap-2 items-center">
                  <h2 className="text-left text-slate-400 text-[16px] font-semibold py-2">
                    Measurements
                  </h2>
                  <Button
                    variant="ghost"
                    onClick={() => setAddMeasurement(!addMeasurement)}
                  >
                    <CiEdit size={26} />
                  </Button>
                </div>
                {addMeasurement && (
                  <Input
                    size="lg"
                    placeholder="Product Measuremnt..."
                    onChange={(e) => handleFormData("measurement", e)}
                  />
                )}
              </div>

              <div className="flex gap-2 flex-col">
                <div className="flex gap-2 items-center">
                  <h2 className="text-left text-slate-400 text-[16px] font-semibold py-2">
                    Add Colors
                  </h2>
                  <Button
                    variant="ghost"
                    onClick={() => setAddColor(!addColor)}
                  >
                    <MdKeyboardArrowRight size={26} />
                  </Button>
                </div>
                {addColor && (
                  <Input
                    size="lg"
                    placeholder="Product Colors..."
                    onChange={(e) => handleFormData("color", e)}
                  />
                )}
              </div>

              <div className="flex gap-2 flex-col">
                <Button
                  variant="ghost"
                  className="text-[18px] font-semibold py-2 w-fit flex gap-2 items-center px-0 hover:bg-transparent"
                  onClick={() => setAdditionalInfo(!additionalInfo)}
                >
                  Additional Info
                  <FaPlusCircle />
                </Button>
                {additionalInfo && (
                  <Textarea
                    size="lg"
                    placeholder="Additional Info..."
                    onChange={(e) => handleFormData("additionaInfo", e)}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
