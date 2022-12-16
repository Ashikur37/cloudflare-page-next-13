import CreateForm from "./CreateForm"
import { prisma } from '../../../../utils/prisma';

async function CreateCategory() {
    const categories = await prisma.category.findMany();
    return (
        <div className="p-10">
            <h4>Create new category</h4>
            <CreateForm categories={categories} />
        </div>
    )
}

export default CreateCategory