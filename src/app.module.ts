import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { CustomersModule } from './customers/customers.module';
import { AddressModule } from './address/address.module';
import { OrderModule } from './order/order.module';
import { OrderDetailModule } from './order-detail/order-detail.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'kangasoi_db',
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: true,
  }), UsersModule, CustomersModule, AddressModule, OrderModule, OrderDetailModule],
})
export class AppModule {}
