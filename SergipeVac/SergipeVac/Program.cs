using Microsoft.EntityFrameworkCore;
using Npgsql;
using SergipeVac.Infra;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var strBuilder = new NpgsqlConnectionStringBuilder()
{
    Port = 5432,
    Host = "localhost",
    Username = "Vinicius",
    Password = "vinicius11",
    Database = "SergipeVac"
};

builder.Services.AddEntityFrameworkNpgsql().AddDbContext<Contexto>(options =>
options.UseNpgsql(strBuilder.ConnectionString));


var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
