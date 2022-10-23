import { Controller, Post, Body,Get ,Param, Patch, Delete} from "@nestjs/common";
import { ProductsService } from "./products.service";


@Controller('products') 


export class ProductsController{
    constructor ( private readonly productsService: ProductsService) {}

    @Post()
    addProduct(
        @Body('title')proTitle: string, 
        @Body('description')prodDsc:string,
        @Body('price')proPrice: number
        ) {
         const generatedId = this.productsService.insertProduct(proTitle,prodDsc,proPrice);
         return {id:generatedId}
    } 


    @Get()
    getAllProducts() {
        return this.productsService.getProducts();
    }

    @Get(':id')
    getProduct(@Param('id') proId: string,) {
        return this.productsService.getSingleProduct(proId);
    }

    @Patch(':id')
    updateProduct(
        @Param('id') prodId: string, 
        @Body('title')prodTitle: string,
        @Body('description')prodDesc:string,
        @Body('price')prodPrice: number ){
            this.productsService.updateProduct(prodId, prodTitle,prodDesc,prodPrice)
         return null;

    } 
    @Delete(':id')
    removeProduct(@Param('id') proId: string,) {
        this.productsService.deleteProduct(proId);
        return null;

    }

}