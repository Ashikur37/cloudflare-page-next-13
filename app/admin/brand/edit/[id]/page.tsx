import { prisma } from '../../../../../utils/prisma';
import EditForm from './EditForm';
async function EditBrand({ params: {
    id
} }: {
    params: { id: string };
}) {
    const brand = await prisma.brand.findUnique({
        where: {
            id: parseInt(id)
        }
    })
    return (
        <div className="p-10">
            <h4>Edit Brand </h4>
            <EditForm brand={brand} />
        </div>
    )
}

export default EditBrand