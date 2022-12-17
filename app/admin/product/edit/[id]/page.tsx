import { prisma } from '../../../../../utils/prisma';
import EditForm from './EditForm';
async function EditProduct({ params: {
    id
} }: {
    params: { id: string };
}) {
    const product = await prisma.product.findUnique({
        where: {
            id: parseInt(id)
        }
    });
    const categories = await prisma.category.findMany();
    const brands = await prisma.brand.findMany();
    return (
        <div className="p-10">
            <h4>Edit Product </h4>
            <EditForm product={product} brands={brands} categories={categories} />
        </div>
    )
}

export default EditProduct