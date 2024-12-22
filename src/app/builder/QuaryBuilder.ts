import { FilterQuery, Query } from "mongoose";

interface QueryParams {
  search?: string;
  page?: number;
  limit?: number;
  sort?: string;
  select?: string;
  [key: string]: unknown;
}

class QueryBuilder<I> {
  public modelQuery: Query<I[], I>;
  public query: QueryParams;

  constructor(modelQuery: Query<I[], I>, query: QueryParams) {
    this.modelQuery = modelQuery;
    this.query = query;
  }

  // Method to handle search functionality
  public search(searchFields: string[]): this {
    if (this.query?.search) {
      const searchValue = this.query.search;
      this.modelQuery = this.modelQuery.find({
        $or: searchFields.map(
          (field) =>
            ({
              [field]: { $regex: searchValue, $options: "i" },
            } as FilterQuery<I>)
        ),
      });
    }
    return this;
  }

  // Method to handle filtering functionality
  public filter(): this {
    const queryObject = { ...this.query };
    const excludeFields = ["search", "page", "limit", "sort", "select"];
    excludeFields.forEach((field) => delete queryObject[field]);

    this.modelQuery = this.modelQuery.find(queryObject as FilterQuery<I>);

    return this;
  }

  // Method to handle sorting functionality
  public sort(): this {
    if (this.query?.sort) {
      this.modelQuery = this.modelQuery.sort(this.query.sort.split(",").join(" ") || "-createdAt");
    }
    return this;
  }

  // Method to handle pagination functionality
  public paginate(): this {
    if (this.query?.page) {
      const page = Number(this.query.page);
      const limit = Number(this.query.limit ?? 10);
      this.modelQuery = this.modelQuery.skip((page - 1) * limit).limit(limit);
    }
    return this;
  }

  // Method to handle field selection functionality
  public select(): this {
    if (this.query?.select) {
      this.modelQuery = this.modelQuery.select(this.query.select.split(",").join(" ") || "-__v");
    }
    return this;
  }

}

export default QueryBuilder;
