import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Order_Detail } from './order-detail.entity';


@Injectable()
export class OrderDetailService extends TypeOrmCrudService<Order_Detail>{
    constructor(@InjectRepository(Order_Detail) repo){
        super(repo)
    }
}
