#include <sqlcipher/sqlite3.h>

class cefdb {
        public:
        void CreateDB();
        void CreateTable();
        bool CheckIfExist();
};