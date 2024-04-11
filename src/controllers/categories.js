import Category from "../models/CategoryModel";

class CategoriesController {
    async getAllCategories(req, res) {
        try {
            const category = await Category.find();
            res.status(200).json({
                message: "Get Done",
                data: category
            });
        } catch (error) {
            res.status(400).json({
                message: error.message
            });
        }
    }

    // GET /Categories/:id
    async getCategoriesDetail(req, res) {
        try {
            const category = await Category.findById(req.params.id);
            if (!category) {
                return res.status(404).json({
                    message: "Not found",
                });
            }
            res.status(200).json({
                message: "Get Detail Done",
                data: category
            });
        } catch (error) {
            res.status(400).json({
                message: error.message
            });
        }
    }

    // POST /Categories
    async createCategories(req, res) {
        const newCategory = await Category.create(req.body);
        const saveCategory = await newCategory.save();
        res.status(200).json({
            message: "Create Done ",
            data: saveCategory
        });
    }

    // PUT /Categories
    async updateCategories(req, res) { 
        try {
            const category = await Category.findByIdAndUpdate(req.params.id, req.body, {new: true});
            if (!category) {
                return res.status(404).json({
                    message: "Not found",
                });
            }
            res.status(200).json({
                message: "Update Done",
                data: category
            });
        } catch (error) {
            res.status(400).json({
                message: error.message
            });
        }
    }

    // DELETE /Categories
    async deleteCategories(req, res) {
        try {
            const category = await Category.findByIdAndDelete(req.params.id);
            if (!category) {
                return res.status(404).json({
                    message: "Not found",
                });
            }
            res.status(200).json({
                message: "Delete Done",
                data: category
            });
        } catch (error) {
            res.status(400).json({
                message: error.message
            });
        }
    }
}

export default CategoriesController