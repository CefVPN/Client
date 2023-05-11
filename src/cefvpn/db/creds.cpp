#include <cefvpn/db/creds.hpp>
#include <shlwapi.h>

#include <string>
#include <iostream>

void cefdb::CreateDB()
{
    sqlite3 *DB;

    // sqlite3_key(&DB, )

    sqlite3_open("C:/Users/p0ison/Dev/CefVPN/bin/db/cefvpn.db", &DB);

    const char *key = "luckymango06$";

    sqlite3_key(DB, key, strlen(key));

    sqlite3_close(DB);
}

void cefdb::CreateTable()
{
    sqlite3 *DB;
    char *message;

    std::string sql_exec =
        "CREATE TABLE IF NOT EXISTS LOCAL(ProfilePath TEXT NOT NULL);";

    try
    {
        int exit = 0;

        sqlite3_open("C:/Users/p0ison/Dev/CefVPN/bin/db/cefvpn.db", &DB);

        const char *key = "luckymango06$";

        sqlite3_key(DB, key, strlen(key));

        sqlite3_exec(DB, sql_exec.c_str(), NULL, 0, &message);

        if (exit != SQLITE_OK)
        {
            std::cout << "Failed to Create Table";
            sqlite3_free(message);
        }
        else
        {
            std::cout << "Sucessfully Created Database";
            sqlite3_close(DB);
        }
    }
    catch (const std::exception &e)
    {
        std::cerr << e.what();
    }
}

bool cefdb::CheckIfExist()
{
    const wchar_t *path = L"C:/Users/p0ison/Dev/CefVPN/bin/db/cefvpn.db";
    if (PathFileExists(path))
    {
        return true;
    }
    else
    {
        return false;
    }
}