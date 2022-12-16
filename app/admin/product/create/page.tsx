import CreateForm from "./CreateForm"
import { prisma } from '../../../../utils/prisma';

async function CreateProduct() {
    const categories = await prisma.category.findMany();
    const brands = await prisma.brand.findMany();

    return (
        <div className="p-10">
            <h4>Create new product</h4>
            <CreateForm categories={categories} brands={brands} />
        </div>
    )
}

export default CreateProduct