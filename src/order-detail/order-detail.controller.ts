import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { Order_Detail } from './order-detail.entity';
import { OrderDetailService } from './order-detail.service';


@Crud({
    model : {
        type : Order_Detail
    }
})


@Controller('order-detail')
export class OrderDetailController implements CrudController<Order_Detail>{
    constructor(public service: OrderDetailService){}
}
