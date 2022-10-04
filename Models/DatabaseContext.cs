using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace PortifolioPro.Models
{
    public class DatabaseContext :DbContext
    {
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseMySql("Server=localhost;DataBase=ContatoPortifolio;Uid=root;Pwd=;");
        }
        public DbSet<Contato> Contatos {get;set;}
    }
}