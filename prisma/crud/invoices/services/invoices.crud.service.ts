/*
-----------------------------------------------------
THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
-----------------------------------------------------
*/

import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { Prisma, invoices } from '@prisma/client';
import {
  PaginationInterface,
  PrismaService,
} from '@prisma-utils/nestjs-prisma';
import { err, ok, Result } from 'neverthrow';

@Injectable()
export class invoicesCrudService {
  constructor(private readonly prismaService: PrismaService) {}

  getPrisma() {
    return this.prismaService;
  }

  async getAll(
    filter?: Prisma.invoicesFindManyArgs,
  ): Promise<Result<PaginationInterface<invoices>, Error>> {
    try {
      const [items, count] = await this.prismaService.$transaction([
        this.prismaService.invoices.findMany(filter),
        this.prismaService.invoices.count({ where: filter?.where }),
      ]);

      const take = filter?.take ? filter?.take : count;
      const skip = filter?.skip ? filter?.skip : 0;

      return ok({
        items: items,
        meta: {
          totalItems: count,
          items: items.length,
          totalPages: Math.ceil(count / take),
          page: skip / take + 1,
        },
      });
    }
    catch(e) {
      return err(new InternalServerErrorException(`Could not get invoices Resources.`));
    }
  }

  async getById(id: string): Promise<Result<invoices, Error>> {
    try {
      const result = await this.prismaService.invoices.findUniqueOrThrow({
        where: { id: id }
      });
      return ok(result);
    } catch(e) {
      return err(new NotFoundException(`invoices Resource ${id} was not found.`));
    }
  }

  async create(data: Prisma.invoicesCreateInput): Promise<Result<invoices, Error>> {
    try {
      const result = await this.prismaService.invoices.create({ data: data });
      return ok(result);
    } catch (e) {
      return err(new InternalServerErrorException(`Could not create invoices Resource.`));
    }
  }

  async update(
    id: string,
    data: Prisma.invoicesUpdateInput,
  ): Promise<Result<invoices, Error>> {
    try {
      const result = await this.prismaService.invoices.update({
        where: { id: id },
        data: data,
      });
      return ok(result);
    } catch (e) {
      return err(new InternalServerErrorException(
        `Could not update invoices Resource ${id}.`,
      ));
    }
  }

  async delete(id: string): Promise<Result<invoices, Error>> {
    try {
      const result = await this.prismaService.invoices.delete({ where: { id: id } });
      return ok(result);
    } catch (e) {
      return err(new InternalServerErrorException(
        `Could not delete invoices Resource ${id}.`,
      ));
    }
  }
}
