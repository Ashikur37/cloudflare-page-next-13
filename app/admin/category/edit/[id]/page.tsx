import { prisma } from '../../../../../utils/prisma';
import EditForm from './EditForm';
async function EditBrand({ params: {
    id
} }: {
    params: { id: string };
}) {
    const categories = await prisma.category.findMany();
    const category = await prisma.category.findUnique({
        where: {
            id: parseInt(id)
        }
    })
    return (
        <div className="p-10">
            <h4>Edit Brand </h4>
            <EditForm category={category} categories={categories} />
        </div>
    )
}

export default EditBrand