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
import { Prisma, integrations } from '@prisma/client';
import {
  PaginationInterface,
  PrismaService,
} from '@prisma-utils/nestjs-prisma';
import { err, ok, Result } from 'neverthrow';

@Injectable()
export class integrationsCrudService {
  constructor(private readonly prismaService: PrismaService) {}

  getPrisma() {
    return this.prismaService;
  }

  async getAll(
    filter?: Prisma.integrationsFindManyArgs,
  ): Promise<Result<PaginationInterface<integrations>, Error>> {
    try {
      const [items, count] = await this.prismaService.$transaction([
        this.prismaService.integrations.findMany(filter),
        this.prismaService.integrations.count({ where: filter?.where }),
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
      return err(new InternalServerErrorException(`Could not get integrations Resources.`));
    }
  }

  async getById(id: string): Promise<Result<integrations, Error>> {
    try {
      const result = await this.prismaService.integrations.findUniqueOrThrow({
        where: { id: id }
      });
      return ok(result);
    } catch(e) {
      return err(new NotFoundException(`integrations Resource ${id} was not found.`));
    }
  }

  async create(data: Prisma.integrationsCreateInput): Promise<Result<integrations, Error>> {
    try {
      const result = await this.prismaService.integrations.create({ data: data });
      return ok(result);
    } catch (e) {
      return err(new InternalServerErrorException(`Could not create integrations Resource.`));
    }
  }

  async update(
    id: string,
    data: Prisma.integrationsUpdateInput,
  ): Promise<Result<integrations, Error>> {
    try {
      const result = await this.prismaService.integrations.update({
        where: { id: id },
        data: data,
      });
      return ok(result);
    } catch (e) {
      return err(new InternalServerErrorException(
        `Could not update integrations Resource ${id}.`,
      ));
    }
  }

  async delete(id: string): Promise<Result<integrations, Error>> {
    try {
      const result = await this.prismaService.integrations.delete({ where: { id: id } });
      return ok(result);
    } catch (e) {
      return err(new InternalServerErrorException(
        `Could not delete integrations Resource ${id}.`,
      ));
    }
  }
}
